import { Component, OnInit, Input } from '@angular/core';
// import { Input } from "@angular/material"
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
// @Input({
//     disableRipple:false,
// })
export class MessagesComponent implements OnInit {
  typesOfShoes = [
    { name: 'Boots', face: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', id: '1' },
    { name: 'Clogs', face: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', id: '2' },
    { name: 'Loafers', face: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', id: '3' },
    { name: 'Moccasins', face: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', id: '4' },
    { name: 'Sneakers', face: 'https://i.stack.imgur.com/isckt.jpg?s=32&g=1', id: '5' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
