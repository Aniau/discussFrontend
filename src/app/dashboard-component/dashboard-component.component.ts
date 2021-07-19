import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenServiceService } from '../service/token-service.service';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {

  constructor(private router: Router, private TokenService: TokenServiceService) { }

  ngOnInit(): void {
  }

  logout(): void
  {
    this.TokenService.signOut();
    this.router.navigate(['']);
    console.log();
  }

}
