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
  group: Group;
  sentMessage: Messages = new Messages('', '', '', 1, '', '', '', ''); // Dummy data
  constructor(private messageService: MessageService,
    private groupService: GroupService,
    private route: ActivatedRoute) { }
  otherMessages: Messages[];
  mineMessage: Messages[];
  getMessages(): void {
    this.messageService.getMessages().then(m => {
      this.otherMessages = m.filter(r => r.idSender !== this.myUserID);
      this.mineMessage = m.filter(r => r.idSender === this.myUserID);
    });
  }
  ngOnInit() {
    this.getMessages();
    this.route.paramMap
      .switchMap((params: ParamMap) => this.groupService.getGroup(params.get('id')))
      .subscribe(g => this.group = g);
  }
  onKey(event: KeyboardEvent) {
    if (event.code === 'Enter') {
      this.addMessage();
    }
  }
  addMessage(): void {
    const toSentMessage = new Messages(
      this.myUserID,
      '', this.sentMessage.message,
      1, 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1',
      '',
      'Me',
      '');

    this.messageService.sentMessage(toSentMessage);
    this.getMessages();
    this.sentMessage.message = '';
  }
}
