import { Component, OnInit,Output, Input } from '@angular/core';

@Component({
    selector: 'menu-component',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})


export class MenuComponent implements OnInit {
    data = [
        {
            title:'Buy',
            ico:'aa',
            id:'1',
            children:[
                {
                    title: 'Offers sent',
                    id:'988',
                    url:'window/buy'
                },
                {
                    title: 'Tenders',
                    id:'982',
                },
                {
                    title: 'Bids',
                    id:'9883',
                },
                {
                    title: 'Info',
                    id:'98834',
                },
            ]
        },
        {
            title:'Sell',
            ico:'aa',
            id:'2',
            children:[
                {
                    title: 'Offers sent',
                    id:'9838',
                },
                {
                    title: 'Tenders',
                    id:'9842',
                },
                {
                    title: 'Bids',
                    id:'94883',
                },
                {
                    title: 'Info',
                    id:'984834',
                },
            ]
        },
        {
            title:'Messages',
            ico:'aa',
            id:'2',
            children:[
                {
                    title: 'Message',
                    id:'9838',
                    url:'window/message'
                },
                {
                    title: 'Tenders',
                    id:'9842',
                },
                {
                    title: 'Bids',
                    id:'94883',
                },
                {
                    title: 'Info',
                    id:'984834',
                },
            ]
        },
        {
            title:'Share Ticket',
            ico:'aa',
            id:'2',
            children:[
                {
                    title: 'Offers sent',
                    id:'9838',
                },
                {
                    title: 'Tenders',
                    id:'9842',
                },
                {
                    title: 'Bids',
                    id:'94883',
                },
                {
                    title: 'Info',
                    id:'984834',
                },
            ]
        },
    ]
    constructor() { }
    ngOnInit() {
    }
}
