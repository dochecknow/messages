import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../services/messages.service';
import { Messages } from '../models/messages.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { GroupService } from '../services/group.service';
import { Group } from '../models/group.model';

// RORY new imports
import { BehaviorSubject } from "rxjs/BehaviorSubject"
import { Observable } from 'rxjs/Observable';
//

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  // RORY new types
  currentMsgs$: Observable<Messages[]>;
  currentMsgSubject$: BehaviorSubject<Messages[]>;
  //

  myUserID = 'MineID';
  group: Group = Group.createNew();
  sentMessage: Messages = new Messages('', '', '', 1, '', '', '', ''); // Dummy data
  constructor(private messageService: MessageService,
    private groupService: GroupService,
    private route: ActivatedRoute) {

    // RORY new observables
    this.currentMsgSubject$ = new BehaviorSubject<Messages[]>([{
      idSender: 'aaa',
      idGroup: 'aaa',
      message: 'aaa',
      timestamp: 1111,
      imageSender: 'aaa',
      imageGroup: 'aaa',
      nameSender: 'aaa',
      nameGroup: 'aaa',
    }]);
    this.currentMsgs$ = this.currentMsgSubject$.asObservable();
    //

  }
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
  upload(e) {
    console.info(e.target.files[0]);
    if (e.target.files[0]) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      
    }
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
    // RORY new subject
    this.currentMsgs$.subscribe(arr => {
      arr.push(toSentMessage);
    });
    //

    this.messageService.sentMessage(toSentMessage);
    this.group.LatestMessageUser = 'Me';
    this.group.LatestMessage = this.sentMessage.message;
    this.group.LatestMessageDate = new Date().toLocaleDateString();
    this.getMessages();
    this.sentMessage.message = '';

    
  }
}
