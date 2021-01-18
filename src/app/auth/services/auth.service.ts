import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({ providedIn: 'root' })
export class AuthService{
    loggedIn = true;
    constructor(private http:HttpClient){

    }

    isAuthed(){
        const promise = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(this.loggedIn);
            }, 800);
        });
        return promise;
    }
    login(){
        this.loggedIn = true;
    }
    logout(){
        this.loggedIn = false;
    }

    google(){
        let options = {
            headers: {
                
            }
        }
        this.http.get('http://peomerapi.herokuapp.com/api/auth/google', options).subscribe(res=> console.log(res));
    }
    
}