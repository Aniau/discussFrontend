import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { Friends } from '../model/friends';
import { Message } from '../model/message';
import { DarkModeServiceService } from '../service/dark-mode-service.service';
import { TokenServiceService } from '../service/token-service.service';

@Component({
  selector: 'app-chat-component',
  templateUrl: './chat-component.component.html',
  styleUrls: ['./chat-component.component.css']
})
export class ChatComponentComponent implements OnInit {

  public login = window.sessionStorage.getItem('currentloggedin');
  public message: string;
  public currentFriendToTalk: string;
  public messages: Message[] = [];
  public darkMode: boolean = false;
  public searchedFriend: string;
  public connection: signalR.HubConnection;

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
  public dataSource = new MatTableDataSource(this.friends);
  
  constructor(private router: Router, private TokenService: TokenServiceService, private darkModeService: DarkModeServiceService) { }

  ngOnInit()
  {
    this.darkModeService.getDarkMode().subscribe(
      (result) => {
        this.darkMode = result;
      }
    )
    
    //  this.connection = new signalR.HubConnectionBuilder()
    //    .configureLogging(signalR.LogLevel.Information)
    //    .withUrl("https://localhost:44370/CommunicationHub")
    //    .build();

    //  this.connection.start()
    //  .then(function () {
    //      console.log('Połączenie nawiązane poprawnie');
    //  })
    //  .catch(function (err: string) {
    //    return console.error(err.toString());
    //  });

    //  this.connection.on("BroadcastMessage", (message: string) => 
    //   {
    //     console.log(message);
    //   });
  }
  
  talkToFriend(friend: Friends)
  {
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
      login: 'DefaultUser',//this.login,
    } 

    this.messages.push(messageData);
    this.message = '';
    this.connection.invoke("SendMessage", messageData);
  }

  searchFriend(e: any)
  {
    console.log(e.target.value);
    this.dataSource.filter = e.target.value.toLowerCase();
    console.log(this.dataSource);
  }

}
