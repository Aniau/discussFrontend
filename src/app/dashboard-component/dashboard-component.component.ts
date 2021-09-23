import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenServiceService } from '../service/token-service.service';
import { Friends } from '../model/friends';
import * as signalR from '@aspnet/signalr';
import { Message } from '../model/message';
import { MatTableDataSource } from '@angular/material/table';
import { DarkModeServiceService } from '../service/dark-mode-service.service';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit 
{
  public login = window.sessionStorage.getItem('currentloggedin');
  public connection: signalR.HubConnection;
  public darkMode: boolean = false;
  
  constructor(private router: Router, private TokenService: TokenServiceService, private darkModeService: DarkModeServiceService) { }

  ngOnInit()
   {
    this.darkModeService.getDarkMode().subscribe(
      (result) => {
        this.darkMode = result;
        console.log(this.darkMode);
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
}