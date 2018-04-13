import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'window-component',
    templateUrl: './window.component.html',
    styleUrls: ['./window.component.css']
})
export class WindowComponent implements OnInit {
    height = (window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight) + 'px';

    constructor() { }
    ngOnInit() {
    }
}
