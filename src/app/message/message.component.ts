import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/messages.service';
import { Messages } from '../models/messages.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private messageService: MessageService) { }
  messages: Messages[];
  getMessages(): void {
    this.messageService.getMessages().then(m => {
      this.messages = m;
    });
  }
  ngOnInit() {
    this.getMessages();
  }
  addMessage(): void {
    this.messageService.sentMessage('123132');
    this.getMessages();
  }
}
