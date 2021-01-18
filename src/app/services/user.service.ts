import { Injectable } from "@angular/core";
import { Note } from "../models/note.model";
import { User } from "../models/user.model";
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
@Injectable()
export class UserService{
    user:User;
    http:HttpClient;

    constructor(){
        this.user = new User(12, 'Ismaeil', 'is.ghouneim@gmail.com', [
            new Note(1,'Memo 1', 'This is a body of a note 1'),
            new Note(2,'Memo 2', 'This is a body of a note 1'),
            new Note(3,'Note 3', 'This is a body of a note 1'),
            new Note(4,'Note 4', 'This is a body of a note 1'),
            new Note(5,'Note 5', 'This is a body of a note 1'),
            new Note(6,'Note 6', 'This is a body of a note 1'),
            new Note(7,'Note 7', 'This is a body of a note 1'),
        ], true);
    }

    registerUser(){
        //Register new user
        this.http.post('/api/users/', this.user);
    }
    

    getUser(id){
        this.http.get('/api/users/${id}').pipe(map(res=> {
            this.user = User.mapUser(res);
        }));
    }

    //Includes updating Note, Background, User Settings
    updateUser(){
        //Update this.user
        this.http.put('/api/users/' + this.user.id, this.user);
    }

    deleteNote(id){
        //Delete note
    }

    deleteAccount(){
        //Delete user
        this.http.delete('/api/users/${id}');
    }
}