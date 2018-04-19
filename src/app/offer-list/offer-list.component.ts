import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

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
    public obs$ = new Subject<any>();
    onClick(itemID: string): void {
        this.obs$.next(this.data.filter(r => r.id == itemID));
    }
    data = [
        {
            name: 'Product one',
            ico: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=623176393,1134115137&fm=27&gp=0.jpg',
            title: 'headpic .lrts .me/chens ongwus heng?ima geMogr',
            time: '12:20',
            id: 'test1'
        },
        {
            name: 'Product two',
            ico: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523965718617&di=2795ca898cbb830b7c7fc39af4da728c&imgtype=0&src=http%3A%2F%2Fimages.91160.com%2Fnews%2Fother%2F201506%2F2015061514094142301.jpg',
            title: 'headpic .lrts .me/chens ongwus heng?ima geMogr',
            time: '12:20',
            id: 'test2'
        }
        ,
        {
            name: 'Product three',
            ico: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=374591928,3773095675&fm=27&gp=0.jpg',
            title: 'headpic .lrts .me/chens ongwus heng?ima geMogr',
            time: '12:20',
            id: 'test3'
        }
        ,
        {
            name: 'Product four',
            ico: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2949362197,3435165921&fm=27&gp=0.jpg',
            title: 'headpic .lrts .me/chens ongwus heng?ima geMogr',
            time: '12:20',
            id: 'test4'
        }
        ,
        {
            name: 'Product Five',
            ico: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3147607667,1397215923&fm=27&gp=0.jpg',
            title: 'headpic .lrts .me/chens ongwus heng?ima geMogr',
            time: '12:20',
            id: 'test5'
        }
    ]
}
