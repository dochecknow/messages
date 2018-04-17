import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'messages-component',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
    height = (window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight) + 'px';
    constructor() { }
    ngOnInit() {
    }
    @Output() onItemClick = new EventEmitter<string>();
    onClick(itemID: string): void {
        this.onItemClick.emit(itemID);
    }
    data = [
        {
            name: 'Ricky Bobby',
            ico: 'https://headpic.lrts.me/chensongwusheng?imageMogr/v2/auto-orient/thumbnail/180x180&e=1524636000&token=OOHK9_MIwdSJxAHYi5os2taDVS13CVvcEa1cZDb9:2UpXh1Et6v-S0_j0eU7X-1iitLs=',
            title: 'headpic .lrts .me/chens ongwus heng?ima geMogr',
            time: '12:20',
            id: 'test1'
        },
        {
            name: 'Ricky Bobby',
            ico: 'https://headpic.lrts.me/chensongwusheng?imageMogr/v2/auto-orient/thumbnail/180x180&e=1524636000&token=OOHK9_MIwdSJxAHYi5os2taDVS13CVvcEa1cZDb9:2UpXh1Et6v-S0_j0eU7X-1iitLs=',
            title: 'headpic .lrts .me/chens ongwus heng?ima geMogr',
            time: '12:20',
            id: 'test2'
        }
        ,
        {
            name: 'Ricky Bobby',
            ico: 'https://headpic.lrts.me/chensongwusheng?imageMogr/v2/auto-orient/thumbnail/180x180&e=1524636000&token=OOHK9_MIwdSJxAHYi5os2taDVS13CVvcEa1cZDb9:2UpXh1Et6v-S0_j0eU7X-1iitLs=',
            title: 'headpic .lrts .me/chens ongwus heng?ima geMogr',
            time: '12:20',
            id: 'test3'
        }
        ,
        {
            name: 'Ricky Bobby',
            ico: 'https://headpic.lrts.me/chensongwusheng?imageMogr/v2/auto-orient/thumbnail/180x180&e=1524636000&token=OOHK9_MIwdSJxAHYi5os2taDVS13CVvcEa1cZDb9:2UpXh1Et6v-S0_j0eU7X-1iitLs=',
            title: 'headpic .lrts .me/chens ongwus heng?ima geMogr',
            time: '12:20',
            id: 'test4'
        }
        ,
        {
            name: 'Ricky Bobby',
            ico: 'https://headpic.lrts.me/chensongwusheng?imageMogr/v2/auto-orient/thumbnail/180x180&e=1524636000&token=OOHK9_MIwdSJxAHYi5os2taDVS13CVvcEa1cZDb9:2UpXh1Et6v-S0_j0eU7X-1iitLs=',
            title: 'headpic .lrts .me/chens ongwus heng?ima geMogr',
            time: '12:20',
            id: 'test5'
        }
    ]
}
