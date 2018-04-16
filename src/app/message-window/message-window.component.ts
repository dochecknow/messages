import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'message-window-component',
    templateUrl: './message-window.component.html',
    styleUrls: ['./message-window.component.css']
})
export class MessageWindowComponent implements OnInit {
    height = (window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight) + 'px';

    constructor() { }
    ngOnInit() {
    }
}
