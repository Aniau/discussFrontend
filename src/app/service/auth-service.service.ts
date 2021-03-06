import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

const AUTH_API = 'https://localhost:5001';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http: HttpClient) { }

  login(login: string, password: string): Observable<any>
  {
    return this.http.post(AUTH_API + '/api/Authenticate/Login', ({
      login, password
    }), httpOptions);
  }

  register(login: string, password: string, email: string): Observable<any>
  {
    return this.http.post(AUTH_API + '/api/Authenticate/Register', {
      login, password, email  
    }, httpOptions);
  }

  getAllusers(): Observable<any>
  {
    return this.http.get(AUTH_API + 'User/GetAll', httpOptions);
  }
}