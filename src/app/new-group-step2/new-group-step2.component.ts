import { Component, Inject, NgModule  } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-new-group-step2',
  templateUrl: './new-group-step2.component.html',
  styleUrls: ['./new-group-step2.component.css']
})

export class NewGroupStep2Component {
  constructor(public dialog: MatDialog) { }
  typesOfShoes = [
    { name: 'Boots', face: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', id: '1' },
    { name: 'Clogs', face: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', id: '2' },
    { name: 'Loafers', face: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', id: '3' },
    { name: 'Moccasins', face: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', id: '4' },
    { name: 'Sneakers', face: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', id: '5' },
  ];
  animal: string;
  name: string;
  openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
