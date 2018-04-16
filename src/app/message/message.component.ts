import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'message-component',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
    height = (window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight) + 'px';

    constructor() { }
    ngOnInit() {
    }
}
