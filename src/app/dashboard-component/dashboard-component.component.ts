import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenServiceService } from '../service/token-service.service';
import { Friends } from '../model/friends';
import * as signalR from '@aspnet/signalr';
import { Message } from '../model/message';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {
  public login = window.sessionStorage.getItem('currentloggedin');
  public message: string;
  public currentFriendToTalk: string;
  public messages: Message[] = [];

  public friends: Friends[] = 
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
  //   const connection = new signalR.HubConnectionBuilder()
  //   .configureLogging(signalR.LogLevel.Information)
  //   .withUrl("https://localhost:44398/notify")
  //   .build();

  // connection.start().then(function () {
  //   console.log('Połączenie nawiązane poprawnie');
  // }).catch(function (err: string) {
  //   return console.error(err.toString());
  // });
  }
  
    talkToFriend(friend: any)
    {
      console.log(friend);
      this.currentFriendToTalk = friend.name + ' ' + friend.lastname + ' (' + friend.login + ')';
    }
  
    sendMesagge(message: string)
    {
      
      console.log(message);
      const messageData: Message = 
      {
        message: message,
        send: true,
        date: new Date(),
        login: this.login,
      } 

      console.log(messageData);
      console.log(this.messages);
      this.messages.push(messageData);
      this.message = '';
        // connection.on("BroadcastMessage", (message: string) => {
    //   this.mesaage = message;
    // });
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
