import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DarkModeServiceService } from '../service/dark-mode-service.service';
import { TokenServiceService } from '../service/token-service.service';

@Component({
  selector: 'app-menu-component',
  templateUrl: './menu-component.component.html',
  styleUrls: ['./menu-component.component.css']
})
export class MenuComponentComponent implements OnInit 
{
  public login = window.sessionStorage.getItem('currentloggedin');

  constructor(private router: Router, private TokenService: TokenServiceService, private darkModeService: DarkModeServiceService) { }

  ngOnInit(): void 
  {
  }
  logout(): void
  {
    this.TokenService.signOut();
    this.router.navigate(['']);
  }
}
