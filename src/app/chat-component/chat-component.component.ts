import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { Friends } from '../model/friends';
import { Message } from '../model/message';
import { DarkModeServiceService } from '../service/dark-mode-service.service';
import { TokenServiceService } from '../service/token-service.service';
import { MatDialog } from '@angular/material/dialog';
import { Favorite } from '../model/favorites';
import { SignalrConnectionService } from '../service/signalr-connection.service';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-chat-component',
  templateUrl: './chat-component.component.html',
  styleUrls: ['./chat-component.component.css']
})
export class ChatComponentComponent implements OnInit {

  public login = window.sessionStorage.getItem('currentloggedin');
  public sendingClientId = window.sessionStorage.getItem('clientCommunicationHubId');
  public message: string;
  public currentFriendToTalk: string;
  public messages: Message[] = [];
  public darkMode: boolean = false;
  public searchedFriend: string;
  public connection: signalR.HubConnection;
  public showSubmenu: boolean = false;
  public typeCommunication: string = '';
  public favoritesFriends: Favorite[] = [];
  public isEmojiPickerVisible: boolean;
  public messageGuid: Guid;
  public friendId: string;
  public friends: Friends[] = 
  [
    {
        "id": 1,
        "login": "awrobel",
        "name": "Ania",
        "lastname": "Wróbel", 
        "show": false,
        "active": false,
    },
    {
        "id": 2,
        "login": "bszyma",
        "name": "Borys",
        "lastname": "Szyma" ,
        "show": false,
        "active": true,
    },
    {
        "id": 3,
        "login": "mzwierzynski",
        "name": "Michał",
        "lastname": "Zwierzyński",
        "show": false, 
        "active": false,
    },
    {
        "id": 4,
        "login": "jkapela",
        "name": "Jaś",
        "lastname": "Kapela" ,
        "show": false,
        "active": true,
    },
    {
        "id": 5,
        "login": "kmojzesza",
        "name": "Klapki",
        "lastname": "Mojżesza" ,
        "show": false,
        "active": false,
    }
];
  public dataSource = new MatTableDataSource(this.friends);
  public dataSourceFavorites = new MatTableDataSource(this.favoritesFriends);
  
  constructor(private router: Router, private TokenService: TokenServiceService, private darkModeService: DarkModeServiceService, public dialog: MatDialog,
              private signalRConnectionService: SignalrConnectionService) { }

  ngOnInit()
  {
    this.darkModeService.getDarkMode().subscribe(
      (result) => {
        this.darkMode = result;
      }
    )
    console.log(this.showSubmenu);
    this.friends = this.friends.sort((a, b) => a.active < b.active ? 1 : -1 );
    console.log(window);
  }
  
  talkToFriend(friend: Friends)
  {
    this.typeCommunication = 'chat';
    this.currentFriendToTalk = friend.name + ' ' + friend.lastname + ' (' + friend.login + ')';
    console.log(friend);
    this.friendId = '0';
    this.showSubMenu(friend, true, '');
  }

  sendMesagge(message: string)
  {     
    this.messageGuid = Guid.create();
    console.log(this.messageGuid);
    console.log(message);

    const messageData: Message = 
    {
      messageId: this.messageGuid,
      destinationClientId: '0',
      sendingClientId: String(window.sessionStorage.getItem('communicationHubId')),
      message: message,
      date: new Date()
    }

    console.log(messageData);
    this.messages.push(messageData);
    this.message = '';
    // this.connection.invoke("SendMessage", messageData);
  }

  searchFriend(e: any)
  {
    this.dataSource.filter = e.target.value.toLowerCase();
    this.dataSourceFavorites.filter = e.target.value.toLowerCase();
  }

  showSubMenu(friend: Friends | Favorite, close: boolean, type: string)
  {
    for(let friendShow of this.friends)
    {
      if(friend.login === friendShow.login && close === false && type === 'friend')
      {
        friendShow.show = true;
        console.log(true);
      }
      else
      {
        friendShow.show = false;
        console.log(false);
      }
    }

    for(let favoriteShow of this.favoritesFriends)
    {
      if(favoriteShow.login === friend.login && close === false && type === 'favorite')
      {
        favoriteShow.show = true;
        console.log('fav ok');
      }
      else
      {
        favoriteShow.show = false;
        console.log('fav nok');
      }
    }

    console.log(this.favoritesFriends);
    console.log(this.friends);
  }

  addEmoji(event: any) 
  {
    this.message = this.message + event.emoji.native;
  }

  openWindowComunnication(type: string)
  {
    this.typeCommunication = type;
    console.log(this.typeCommunication);
    window.open('/video-audio', "", "top=100, left=100, width=1500,height=1000");
    // const windowCommunication = this.dialog.open(VideoAudioComponentComponent,
    //   {
    //     width: '80%',
    //     height: '80%',
    //     hasBackdrop: true,
    //     panelClass: 'dialog'
    //   });
  }

  addToFavorite(friend: Favorite)
  {
    this.favoritesFriends.push(friend);
  }

  removedToFavorite(friend: Favorite)
  {
    this.favoritesFriends = this.favoritesFriends.filter((item: Favorite) => friend !== item);
  }

}
