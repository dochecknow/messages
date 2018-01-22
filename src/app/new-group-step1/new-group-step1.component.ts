import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-new-group-step1',
  templateUrl: './new-group-step1.component.html',
  styleUrls: ['./new-group-step1.component.css']
})
export class NewGroupStep1Component implements OnInit {
_user: User;
_users: Array<User>;
  constructor() { }

  ngOnInit() {
    this._user = new User('aaaa', 'https://jnswwns.com', 'test@gmail.com', 'Michael');
    this._users = [this._user, this._user];
  }

}
