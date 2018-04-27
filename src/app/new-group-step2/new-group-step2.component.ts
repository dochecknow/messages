import { Component, Inject, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-new-group-step2',
  templateUrl: './new-group-step2.component.html',
  styleUrls: ['./new-group-step2.component.css']
})

export class NewGroupStep2Component implements OnInit {

  userArray:any;
  
  ngOnInit() {
    var that=this;
    this.userlist.subscribe(function (d) {
      that.userArray = d;
    })
  }
  @Input() userlist = new Subject<any>();
  constructor(public dialog: MatDialog,
    private route: ActivatedRoute) { }
  openDialog(userID: string): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '400px'
    });
   
    dialogRef.afterClosed().subscribe(result => {
  
      if (result === 'delete') {
        this.userArray=this.userArray.filter(r => r.id !== userID)
        this.userlist.next(this.userArray)
      }
    });
  }

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
