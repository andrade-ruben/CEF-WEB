import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:7261/Auth/login';

  constructor(private http:HttpClient) {

   }

   proceedLogin(data: any):Observable<any>{
    console.log("Login Successfully")
    return this.http.post(this.apiUrl,data)
   }
   
}
