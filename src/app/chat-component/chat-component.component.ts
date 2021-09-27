import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import * as signalR from '@aspnet/signalr';
import { Friends } from '../model/friends';
import { Message } from '../model/message';
import { DarkModeServiceService } from '../service/dark-mode-service.service';
import { TokenServiceService } from '../service/token-service.service';
import { videoAudio } from '../model/videoAudio';
import { MatDialog } from '@angular/material/dialog';
import { VideoAudioComponentComponent } from './video-audio-component/video-audio-component.component';
import { Favorite } from '../model/favorites';

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
  public showSubmenu: boolean = false;
  public typeCommunication: string = '';
  public favoritesFriends: Favorite[] = [];
  public isEmojiPickerVisible: boolean;
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
  
  constructor(private router: Router, private TokenService: TokenServiceService, private darkModeService: DarkModeServiceService, public dialog: MatDialog) { }

  ngOnInit()
  {
    this.darkModeService.getDarkMode().subscribe(
      (result) => {
        this.darkMode = result;
      }
    )
    console.log(this.showSubmenu);
    this.friends = this.friends.sort((a, b) => a.active < b.active ? 1 : -1 );
    
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
    this.typeCommunication = 'chat';
    this.currentFriendToTalk = friend.name + ' ' + friend.lastname + ' (' + friend.login + ')';
    console.log(this.typeCommunication);
    this.showSubMenu(friend, true, '');
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
      }
      else
      {
        favoriteShow.show = false;
      }
    }

    console.log(this.favoritesFriends);
    console.log(this.friends);
  }

  addEmoji(event: any) 
  {
    // this.isEmojiPickerVisible = false;
    console.log(event.emoji.native);
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
