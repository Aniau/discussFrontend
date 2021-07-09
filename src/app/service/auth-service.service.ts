import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

const AUTH_API = '';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any>
  {
    return this.http.post(AUTH_API + '', {
      username, password
    }, httpOptions);
  }

  register(username: string, password: string, email: string): Observable<any>
  {
    return this.http.post(AUTH_API + '', {
      username, password, email  
    }, httpOptions);
  }
}