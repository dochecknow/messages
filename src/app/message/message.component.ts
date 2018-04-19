import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'message-component',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

    ngOnInit(): void {

    }
    height = (window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight) + 'px';
    @Input() detailData = new Observable<any>();
    constructor() { }

}
