import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.css']
})
export class AuthComponentComponent implements OnInit {
  public login = '';
  public pass = '';
  public hide = true;
  public tooTip = 'show';
  // public error: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  // onLoginClick(e)
  // {
  //   this.error = '';
  //   if (e.validationGroup && !e.validationGroup.validate().isValid) 
  //   {
  //     return;
  //   }
  //   this.logIn();
  // }

  // onRegisterClick(e)
  // {

  // }

  logIn() :void
  {
    // this.authenticationService.login(this.model.nazwaUzytkownika, this.model.haslo).subscribe(value => 
    //   { },
    //   error2 => 
    //   {
    //     const errorNumber = error2.status;
    //     switch (errorNumber) 
    //     {
    //       case 401:
    //         this.snackbar.open('Błędny login lub hasło !', 'Zamknij', {duration: 2000, panelClass: ['snackbarError']});
    //         break;
    //     }
    //   }, () => 
    //   {
    //     this.router.navigate(['main-navigator']);
    //     this.snackbar.open('Pomyślnie zalogowano użytkownika ' + sessionStorage.getItem('login').toLocaleUpperCase(), 'Zamknij', 
    //                         {duration: 2000, panelClass: ['snackbarCorrect']});
    //   });
    this.router.navigate(['dashboard-component']);
  }
}
