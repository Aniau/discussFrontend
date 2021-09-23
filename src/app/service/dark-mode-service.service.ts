import { Injectable } from '@angular/core';
import { BehaviorSubject, ObjectUnsubscribedError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeServiceService {
  private darkMode = new BehaviorSubject<boolean>(false);

  constructor() { }
  
  setDarkMode(isDarkMode: boolean): void
  {
    this.darkMode.next(isDarkMode);
  }

  getDarkMode(): Observable<boolean>
  {
    return this.darkMode.asObservable();
  }
}
