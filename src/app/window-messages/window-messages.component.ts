import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Component({
    selector: 'window-messages',
    templateUrl: './window-messages.component.html',
    styleUrls: ['./window-messages.component.css']
})
export class MessagesWindowComponent implements OnInit {
    height = (window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight) + 'px';
    constructor() { }

    ngOnInit() {
    }
    public obs$ = new Subject<any>();;
    onClick(itemID: string): void {
        this.obs$.next(this.data.filter(r => r.id == itemID));
    }
    data = [
        {
            name: 'Ricky Bobby',
            ico: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523969142524&di=9013b80be418b35f7ec85f3fd2a86d30&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D2a3698229d0a304e462fa8b9b9a1cdf3%2F241f95cad1c8a7861e3ea6286d09c93d70cf5084.jpg',
            title: 'headpic .lrts .me/chens ongwus heng?ima geMogr',
            time: '12:20',
            id: 'test1',
            use: 'me',
            text: 'test text1'
        },
        {
            name: 'Ricky Bobby',
            ico: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523969142524&di=9013b80be418b35f7ec85f3fd2a86d30&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D2a3698229d0a304e462fa8b9b9a1cdf3%2F241f95cad1c8a7861e3ea6286d09c93d70cf5084.jpg',
            title: 'headpic .lrts .me/chens ongwus heng?ima geMogr',
            time: '12:20',
            id: 'test1',
            use: 'she',
            text: 'test text2'
        }
        ,
        {
            name: 'Ricky Bobby',
            ico: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523969142524&di=9013b80be418b35f7ec85f3fd2a86d30&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D2a3698229d0a304e462fa8b9b9a1cdf3%2F241f95cad1c8a7861e3ea6286d09c93d70cf5084.jpg',
            title: 'headpic .lrts .me/chens ongwus heng?ima geMogr',
            time: '12:20',
            id: 'test3',
            use: 'me',
            text: 'test text3'
        }
        ,
        {
            name: 'Ricky Bobby',
            ico: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523969142524&di=9013b80be418b35f7ec85f3fd2a86d30&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D2a3698229d0a304e462fa8b9b9a1cdf3%2F241f95cad1c8a7861e3ea6286d09c93d70cf5084.jpg',
            title: 'headpic .lrts .me/chens ongwus heng?ima geMogr',
            time: '12:20',
            id: 'test4',
            use: 'she',
            text: 'test text4'
        }
        ,
        {
            name: 'Ricky Bobby',
            ico: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523969142524&di=9013b80be418b35f7ec85f3fd2a86d30&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D2a3698229d0a304e462fa8b9b9a1cdf3%2F241f95cad1c8a7861e3ea6286d09c93d70cf5084.jpg',
            title: 'headpic .lrts .me/chens ongwus heng?ima geMogr',
            time: '12:20',
            id: 'test5',
            use: 'she',
            text: 'test text5'
        }
    ]
}
