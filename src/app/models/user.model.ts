import { Note } from "./note.model";

export class User{
    id:string;
    name:string;
    email:string;
    password:string;
    notes: Note[];
    typewriterSound: boolean;

    constructor(id, name, email, notes, typewriterSound){
        this.id = id;
        this.name = name;
        this.email = email;
        this.notes = notes;
        this.typewriterSound = true;
    }

    static mapUser(response:any){
        return new User(response.id, response.name,response.email,[], response.typewriterSound);
    }
}