import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'offer-list-component',
    templateUrl: './offer-list.component.html',
    styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {
    height = (window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight) + 'px';
    constructor() { }
    ngOnInit() {
    }
    data=[
        {
            name:'Ricky Bobby',
            ico:'https://headpic.lrts.me/chensongwusheng?imageMogr/v2/auto-orient/thumbnail/180x180&e=1524636000&token=OOHK9_MIwdSJxAHYi5os2taDVS13CVvcEa1cZDb9:2UpXh1Et6v-S0_j0eU7X-1iitLs=',
            title:'headpic .lrts .me/chens ongwus heng?ima geMogr',
            time:'12:20',
            id:'adsx'
        },
        {
            name:'Ricky Bobby',
            ico: 'https://headpic.lrts.me/chensongwusheng?imageMogr/v2/auto-orient/thumbnail/180x180&e=1524636000&token=OOHK9_MIwdSJxAHYi5os2taDVS13CVvcEa1cZDb9:2UpXh1Et6v-S0_j0eU7X-1iitLs=',
            title:'headpic .lrts .me/chens ongwus heng?ima geMogr',
            time:'12:20',
            id:'adsx1'
        }
        ,
        {
            name: 'Ricky Bobby',
            ico: 'https://headpic.lrts.me/chensongwusheng?imageMogr/v2/auto-orient/thumbnail/180x180&e=1524636000&token=OOHK9_MIwdSJxAHYi5os2taDVS13CVvcEa1cZDb9:2UpXh1Et6v-S0_j0eU7X-1iitLs=',
            title: 'headpic .lrts .me/chens ongwus heng?ima geMogr',
            time: '12:20',
            id: 'adsx1'
        }
        ,
        {
            name: 'Ricky Bobby',
            ico: 'https://headpic.lrts.me/chensongwusheng?imageMogr/v2/auto-orient/thumbnail/180x180&e=1524636000&token=OOHK9_MIwdSJxAHYi5os2taDVS13CVvcEa1cZDb9:2UpXh1Et6v-S0_j0eU7X-1iitLs=',
            title: 'headpic .lrts .me/chens ongwus heng?ima geMogr',
            time: '12:20',
            id: 'adsx1'
        }
        ,
        {
            name: 'Ricky Bobby',
            ico: 'https://headpic.lrts.me/chensongwusheng?imageMogr/v2/auto-orient/thumbnail/180x180&e=1524636000&token=OOHK9_MIwdSJxAHYi5os2taDVS13CVvcEa1cZDb9:2UpXh1Et6v-S0_j0eU7X-1iitLs=',
            title: 'headpic .lrts .me/chens ongwus heng?ima geMogr',
            time: '12:20',
            id: 'adsx1'
        }
    ]
}
