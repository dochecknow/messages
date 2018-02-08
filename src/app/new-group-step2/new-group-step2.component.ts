import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-new-group-step2',
  templateUrl: './new-group-step2.component.html',
  styleUrls: ['./new-group-step2.component.css']
})
export class NewGroupStep2Component {
  typesOfShoes = [
    { name: 'Boots', face: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', id: '1' },
    { name: 'Clogs', face: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', id: '2' },
    { name: 'Loafers', face: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', id: '3' },
    { name: 'Moccasins', face: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', id: '4' },
    { name: 'Sneakers', face: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', id: '5' },
  ];
 
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '150px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
  styleUrls: ['./new-group-step2.component.css']
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
