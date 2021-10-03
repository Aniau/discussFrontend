import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalrConnectionService {

  private connection: signalR.HubConnection;

  constructor() { }
  
  connectToSignalR(token: string, id: string, username: string)
  {
    const params: signalR.IHttpConnectionOptions = {  
                                                        accessTokenFactory: () => 
                                                        {
                                                          return token;
                                                        }
                                                      };
                                                      // headers: {"id" : "id", "username": "username"}
    this.connection = new signalR.HubConnectionBuilder()
                      .configureLogging(signalR.LogLevel.Information)
                      .withUrl("https://localhost:44370/CommunicationHub", params, 
                      )
                      .build();

    this.connection.start()
    .then(function () 
    {
        console.log('Połączenie nawiązane poprawnie');
    })
    .catch(function (err: string) 
    {
      return console.error(err.toString());
    });

    this.connection.on("BroadcastMessage", (message: string) => 
    {
      console.log(message);
    });
  }
}
