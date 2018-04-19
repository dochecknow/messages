import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

@Component({
    selector: 'message-window-component',
    templateUrl: './message-window.component.html',
    styleUrls: ['./message-window.component.css']
})
export class MessageWindowComponent implements OnInit {
    height = (window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight) + 'px';
    SelectedData = new Subscriber<Array<any>>();
    constructor() { }
    ngOnInit() {
    }
}
