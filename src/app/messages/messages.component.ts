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
    id=''
    @Output() onItemClick = new EventEmitter<string>();
    onClick(itemID: string): void {
        this.id = itemID
        this.onItemClick.emit(itemID);
    }
    data = [
        {
            name: 'Ricky Bobby',
            ico: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523969142524&di=9013b80be418b35f7ec85f3fd2a86d30&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D2a3698229d0a304e462fa8b9b9a1cdf3%2F241f95cad1c8a7861e3ea6286d09c93d70cf5084.jpg',
            title: 'headpic .lrts .me/chens ongwus heng?ima geMogr',
            time: '12:20',
            id: 'test1'
        },
        {
            name: 'Ricky Bobby',
            ico: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523969142524&di=9013b80be418b35f7ec85f3fd2a86d30&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D2a3698229d0a304e462fa8b9b9a1cdf3%2F241f95cad1c8a7861e3ea6286d09c93d70cf5084.jpg',
            title: 'headpic .lrts .me/chens ongwus heng?ima geMogr',
            time: '12:20',
            id: 'test2'
        }
        ,
        {
            name: 'Ricky Bobby',
            ico: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523969142524&di=9013b80be418b35f7ec85f3fd2a86d30&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D2a3698229d0a304e462fa8b9b9a1cdf3%2F241f95cad1c8a7861e3ea6286d09c93d70cf5084.jpg',
            title: 'headpic .lrts .me/chens ongwus heng?ima geMogr',
            time: '12:20',
            id: 'test3'
        }
        ,
        {
            name: 'Ricky Bobby',
            ico: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523969142524&di=9013b80be418b35f7ec85f3fd2a86d30&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D2a3698229d0a304e462fa8b9b9a1cdf3%2F241f95cad1c8a7861e3ea6286d09c93d70cf5084.jpg',
            title: 'headpic .lrts .me/chens ongwus heng?ima geMogr',
            time: '12:20',
            id: 'test4'
        }
        ,
        {
            name: 'Ricky Bobby',
            ico: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523969142524&di=9013b80be418b35f7ec85f3fd2a86d30&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D2a3698229d0a304e462fa8b9b9a1cdf3%2F241f95cad1c8a7861e3ea6286d09c93d70cf5084.jpg',
            title: 'headpic .lrts .me/chens ongwus heng?ima geMogr',
            time: '12:20',
            id: 'test5'
        }
    ]
}
