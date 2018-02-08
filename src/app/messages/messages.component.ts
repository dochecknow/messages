import { Component, OnInit, Input, Output } from '@angular/core';
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
  _groups: Group[];
  groups: Group[];
  getGroups(): void {
    this.groupService.getGroups().then(g => this.groups = this._groups = g);
  }

  serchChange(event) {
    const searchValue = (<HTMLInputElement>event.target).value;

    if (searchValue.length !== 0) {
      this.groups = this._groups.filter(u => u.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
    } else {
      this.groups = this._groups;
    }
  }
  ngOnInit() {
    this.getGroups();
  }

}
