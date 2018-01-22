import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-new-group-step2',
  templateUrl: './new-group-step2.component.html',
  styleUrls: ['./new-group-step2.component.css']
})
export class NewGroupStep2Component implements OnInit {
  _user: User;
  _users: Array<User>;
  constructor() { }

  ngOnInit() {
    this._user = new User('aaaa', 'https://jnswwns.com', 'test@gmail.com', 'Michael');
    this._users = [this._user, this._user];
  }

}
