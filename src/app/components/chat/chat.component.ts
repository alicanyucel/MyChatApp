import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ChatServiceService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent  implements OnInit{
 @Output() cloeseChatEmitter=new EventEmitter()

  constructor(public chatService:ChatServiceService) { }

  ngOnInit(): void {
    this.chatService.createChatConnection();
  }
  backToHome(){
  this.cloeseChatEmitter.emit();
  }
}
