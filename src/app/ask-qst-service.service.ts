import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from './register';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class AskQstServiceService {
  base_url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  Registration(userName, password, role): Observable<any>{  
    const body ={userName, password,role};
   return this.http.post(this.base_url+'/user',body);  
  }

  Login(userName, password): Observable<any>{
    const body = {userName, password};
   return this.http.post(this.base_url+'/userlogin',body);  

  }
  // CreateUser(register: Register){
  //   var a =this.base_url+'User';  
  //   return this.http.post(this.base_url+'/User',register);
  // }
}
