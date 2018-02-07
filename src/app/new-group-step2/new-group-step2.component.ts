import { Component } from '@angular/core';
// import { DialogOverviewExampleDialog } from './user.model'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-new-group-step2',
  templateUrl: './new-group-step2.component.html',
  styleUrls: ['./new-group-step2.component.css']
})
export class NewGroupStep2Component {
  constructor(public dialog: MatDialog) { }

  // openDialog(): void {
  //   let dialogRef = this.dialog.open(DialogOverviewExampleDialog,{
  //     width:'250px',
  //     height:'60px'
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //   });
  // }
}
