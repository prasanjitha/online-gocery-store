import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  getUserDetails(username, password){
    return this.http.post('/api/auth.php',{username,password}).subscribe(data =>{
  console.log(data,"is what we got from the server")
    })

  }
}
