import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'router',
    templateUrl: './router.component.html',
    styleUrls: ['./router.component.css']
})

export class RouterComponent {
    height = (window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight) - 25 +'px';
}