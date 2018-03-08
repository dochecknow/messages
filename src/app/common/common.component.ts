import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'common',
    templateUrl: './common.component.html',
    styleUrls: ['./common.component.css']
})

export class CommonComponent {
    height = (window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight) *0.8 +'px';
    top = (window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight) *0.1 +'px';
}