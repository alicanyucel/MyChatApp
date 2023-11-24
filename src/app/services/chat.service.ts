import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { User } from '../models/user';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  myName: string = "";
  private chatConnection?: HubConnection;
  constructor(private _htppClient: HttpClient) { }
  registerUser(user: User) {
    return this._htppClient.post(`${environment.apiUrl}api/chat/register-user`, user, { responseType: 'text' });
  }
  createChatConnection() {
    this.chatConnection = new HubConnectionBuilder().withUrl(`${environment.apiUrl}hubs/chat`).withAutomaticReconnect().build();
    this.chatConnection.start().catch(error => {
      console.log(error);
    })
  }
  stopChatConnection(){
    
  }
}
