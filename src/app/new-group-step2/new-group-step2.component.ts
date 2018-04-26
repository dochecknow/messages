import { Component, Inject, OnInit,Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from '../services/user.service';
import { GroupService } from '../services/group.service';
import { User } from '../models/user.model';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-new-group-step2',
  templateUrl: './new-group-step2.component.html',
  styleUrls: ['./new-group-step2.component.css']
})

export class NewGroupStep2Component implements OnInit {
  ngOnInit(){}
  @Input() userlist = new Observable<any>();
  // users: User[];
  // constructor(public dialog: MatDialog, private userService: UserService,
  //   private groupService: GroupService, private route: ActivatedRoute, private router: Router, ) { }
  // private selectedUserIDs: string;
  // groupName = 'My New Group';
  // selectedID: string;
  // getUsers(): void {
  //   this.userService.getUsers().then(u => this.users = u);
  // }

  // createGroup(): void {
  //   if (this.groupName === '') { return; }
  //   const userNames: string[] = [];
  //   for (const user of this.users) {
  //     userNames.push(user.username);
  //   }
  //   const groupID = this.groupService.addGroup(this.groupName, userNames);
  //   this.router.navigate(['message/' + groupID]);
  // }
  // ngOnInit() {
  //   this.selectedUserIDs = '';
  //   this.route.paramMap
  //     .switchMap((params: ParamMap) => {
  //       this.selectedUserIDs = params.get('id');
  //       return this.userService.getUsersByID(this.selectedUserIDs);
  //     })
  //     .subscribe(u => this.users = u);
  // }
  // onBackClick(): void {
  //   this.router.navigate(['/newGroupStep1/' + this.selectedUserIDs]);
  // }
  // openDialog(user: User): void {
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     width: '150px'
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result === 'delete') {
  //       const index = this.users.indexOf(user);
  //       this.users.splice(index, 1);
  //     }
  //   });
  // }

}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
  styleUrls: ['./new-group-step2.component.css']
})
// tslint:disable-next-line:component-class-suffix
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onDeleteClick(): void {
    this.dialogRef.close('delete');
  }
}
