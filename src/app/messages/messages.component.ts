import { Component, OnInit, Input } from '@angular/core';
import { Group } from '../models/group.model';
import { GroupService } from '../services/group.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
// @Input({
//     disableRipple:false,
// })
export class MessagesComponent implements OnInit {
  constructor(private groupService: GroupService) { }

  groups: Group[];
  getGroups(): void {
    this.groupService.getGroups().then(g => this.groups = g);
  }

  ngOnInit() {
    this.getGroups();
  }

}
