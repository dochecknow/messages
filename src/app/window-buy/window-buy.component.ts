import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'window-buy-component',
    templateUrl: './window-buy.component.html',
    styleUrls: ['./window-buy.component.css']
})
export class WindowBuyComponent implements OnInit {
    height = (window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight) + 'px';
    SelectedID: string;
    onItemClick(itemID: string): void {
        this.SelectedID = itemID;
    }
    constructor() { }
    ngOnInit() {
    }
}
