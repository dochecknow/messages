import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

    ngOnInit(): void {

    }
    height = (window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight) + 'px';
    @Input() detailData = new Observable<any>();
    constructor() { }

}
