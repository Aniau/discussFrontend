import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenServiceService } from '../service/token-service.service';
import { Friends } from '../model/friends';
import * as signalR from '@aspnet/signalr';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {
  public login = window.sessionStorage.getItem('currentloggedin');
  public message: string;

  friends: Friends[] = 
  [
    {
        "id": 1,
        "login": "awrobel",
        "name": "Ania",
        "lastname": "Wróbel" 
    },
    {
        "id": 2,
        "login": "bszyma",
        "name": "Borys",
        "lastname": "Szyma" 
    },
    {
        "id": 3,
        "login": "mzwierzynski",
        "name": "Michał",
        "lastname": "Zwierzyński" 
    },
    {
        "id": 4,
        "login": "jkapela",
        "name": "Jaś",
        "lastname": "Kapela" 
    },
    {
        "id": 5,
        "login": "kmojzesza",
        "name": "Klapki",
        "lastname": "Mojżesza" 
    }
];

  constructor(private router: Router, private TokenService: TokenServiceService) { }

  ngOnInit(): void {
    console.log(window);
    const connection = new signalR.HubConnectionBuilder()
    .configureLogging(signalR.LogLevel.Information)
    .withUrl("https://localhost:44398/notify")
    .build();

  connection.start().then(function () {
    console.log('Połączenie nawiązane poprawnie');
  }).catch(function (err) {
    return console.error(err.toString());
  });

  connection.on("BroadcastMessage", (message: string) => {
    this.message = message;
  });
  }

  logout(): void
  {
    this.TokenService.signOut();
    this.router.navigate(['']);
    console.log();
  }

//  public searchFriend = (e: any) =>
//  {
//   this.friends.filter = e.trim().toLowerCase();
//    console.log(this.friends.filter);
//  }
}
