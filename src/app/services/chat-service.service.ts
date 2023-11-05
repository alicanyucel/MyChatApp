import { Injectable } from '@angular/core';
import { HttpClient } from '@microsoft/signalr';
import { environment } from 'src/environments/environment.prod';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  constructor(private _htppClient:HttpClient) 
  {}
  registerUser(user:User)
  {
    return this._htppClient.post('${environment.apiUrl}api/chat/register-user',user,{responseType:'text'});
  }
}
