import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { MatSelectionList } from '@angular/material';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-new-group-step1',
  templateUrl: './new-group-step1.component.html',
  styleUrls: ['./new-group-step1.component.css']
})


export class NewGroupStep1Component implements OnInit {
  @ViewChild(MatSelectionList)
  private userSelectionList: MatSelectionList;

  constructor(private userService: UserService) { }
  _users: User[];
  users: User[];


  getUsers(): void {
    this.userService.getUsers().then(u => this.users = this._users = u);
  }

  ngOnInit() {
    this.getUsers();
  }
  serchChange(event) {

    for (const item of this.userSelectionList.selectedOptions.selected) {
      let v = item.value;
      console.info(v);
    }
    const searchValue = (<HTMLInputElement>event.target).value;
    if (searchValue.length !== 0) {
      this.users = this._users.filter(u => u.username.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
    } else {
      this.users = this._users;
    }
  }
}
