import { Injectable } from '@angular/core';

const TOKEN_KEY = '';
// const USER_KEY = '';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

  constructor() { }

  signOut(): void
  {
    window.sessionStorage.clear();
  }

  public saveToken(token: string):void
  {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null
  {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
}