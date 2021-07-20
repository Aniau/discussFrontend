import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';
import { TokenServiceService } from '../service/token-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  public loggedIn = false;
  public logFailed = false;

  constructor(private router: Router, private AuthServiceService: AuthServiceService, private TokenService: TokenServiceService,
              public snack: MatSnackBar) { }

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
    this.AuthServiceService.login(this.login, this.pass).subscribe(value => 
    { 
      this.loggedIn = true;
      this.logFailed = false;
      this.TokenService.saveToken(value.token);
      window.sessionStorage.setItem('currentloggedin', this.login);
      
      this.snack.open('Correctly login user: ' + this.login, 'Close', {duration: 40000, panelClass: ['snack-correct']});
      this.router.navigate(['dashboard-component']);
      console.log(value) 
    },
    error => 
    {
      this.loggedIn = false;
      this.logFailed = true;
      this.snack.open('Wrong username or password !', 'Close', {duration: 2000, panelClass: ['snack-error']});
      console.log(error);
       // const errorNumber = error2.status;
         //switch (errorNumber) 
        // {
          // case 401:
             //break;
         //}
     }
       //, () => 
      //{
         //this.router.navigate(['main-navigator']);
         //this.snackbar.open('Pomyślnie zalogowano użytkownika ' + sessionStorage.getItem('login').toLocaleUpperCase(), 'Zamknij', 
         //                    {duration: 2000, panelClass: ['snackbarCorrect']});
       //}
       );
    //this.router.navigate(['dashboard-component']);
  }
}
