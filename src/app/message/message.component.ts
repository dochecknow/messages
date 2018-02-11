import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../services/messages.service';
import { Messages } from '../models/messages.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { GroupService } from '../services/group.service';
import { Group } from '../models/group.model';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  myUserID = 'MineID';
  group: Group = Group.createNew();
  sentMessage: Messages = new Messages('', '', '', 1, '', '', '', ''); // Dummy data
  constructor(private messageService: MessageService,
    private groupService: GroupService,
    private route: ActivatedRoute) { }
  otherMessages: Messages[];
  mineMessage: Messages[];
  getMessages(): void {
    this.messageService.getMessagesByGroup(this.group.id).then(m => {
      this.otherMessages = m.filter(r => r.idSender !== this.myUserID);
      this.mineMessage = m.filter(r => r.idSender === this.myUserID);
    });
  }
  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.groupService.getGroup(params.get('id')))
      .subscribe(g => {
        this.group = g;
        this.getMessages();
      });
  }
  onKey(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      this.addMessage();
    }
  }
  addMessage(): void {
    if (this.sentMessage.message === '') {
      return;
    }
    const toSentMessage = new Messages(
      this.myUserID,
      this.group.id,
      this.sentMessage.message,
      1, 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1',
      '',
      'Me',
      '');

    this.messageService.sentMessage(toSentMessage);
    this.group.LatestMessageUser = 'Me';
    this.group.LatestMessage = this.sentMessage.message;
    this.group.LatestMessageDate = new Date().toLocaleDateString();
    this.getMessages();
    this.sentMessage.message = '';
  }
}
