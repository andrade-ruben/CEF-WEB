import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'https://localhost:7261/Auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private apiUrl = 'login';

  constructor(private http:HttpClient) {

   }

   proceedLogin(data: any):Observable<any>{
    console.log("Login Successfully")
    return this.http.post<any>(AUTH_API + 'login',data)
   }
   

   isLoggedIn(){
    return localStorage.getItem('token')!=null;
   }

   getToken(){
    return localStorage.getItem('token')|| '';
   }
}
