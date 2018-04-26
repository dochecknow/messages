import { Component, OnInit, ViewChild } from '@angular/core';
// import { UserService } from '../services/user.service';
import { MatSelectionList } from '@angular/material';
import { forEach } from '@angular/router/src/utils/collection';
import { Location } from '@angular/common';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new-group-step1',
  templateUrl: './new-group-step1.component.html',
  styleUrls: ['./new-group-step1.component.css']
})


export class NewGroupStep1Component implements OnInit {

  @ViewChild(MatSelectionList)
  private userSelectionList: MatSelectionList;

  _users= [

    { id: '1', name: 'MyGroup1', imagepath: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', LatestMessageUser: 'Kevin', LatestMessage: 'I find a very interest thing', LatestMessageDate: '02/08/2018', members: ['Kevin1', 'Mike'] },
    { id: '2', name: 'MyGroup2', imagepath: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', LatestMessageUser: '', LatestMessage: '', LatestMessageDate: '', members: ['Kevin2', 'Mike'] },

    { id: '3', name: 'MyGroup3', imagepath: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', LatestMessageUser: '', LatestMessage: '', LatestMessageDate: '', members: ['Kevin3', 'Mike'] },
    { id: '4', name: 'MyGroup4', imagepath: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', LatestMessageUser: '', LatestMessage: '', LatestMessageDate: '', members: ['Kevin4', 'Mike'] },

    { id: '5', name: 'MyGroup5', imagepath: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', LatestMessageUser: '', LatestMessage: '', LatestMessageDate: '', members: ['Kevin5', 'Mike'] }
  ];
  users = []
  _selectUserIDs = [];

  onNextClick(): void {
    this._selectUserIDs = [];
    for (const item of this.userSelectionList.selectedOptions.selected) {
   
      this._selectUserIDs.push(...this._users.filter(
        it => {
          return item.value == it.id
        }
      ));
    }
  }
  ngOnInit() {
    this.users = this._users;
  }
  serchChange(event) {
    const searchValue = (<HTMLInputElement>event.target).value;
    if (searchValue.length !== 0) {
      this.users = this._users.filter(u => u.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
    } else {
      this.users = this._users;
    }
  }
}
