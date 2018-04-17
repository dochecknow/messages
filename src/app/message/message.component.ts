import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'message-component',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnChanges, OnInit {
    list: any;
    getDataFromService(): void {
        this.list = [
            {
                id: 'test1',
                use: 'me',
                text: 'Note: It is possible to use template-driven forms instead, if you prefer. We use reactive forms in this example because it makes subscribing to changes in the inputs value easy.For this example, be sure to import ReactiveFormsModule from @angular/forms into your NgModule. If you are unfamiliar with using reactive forms, you can read more about the subject in the Angular documentation.'
            },
            {
                id: 'test1',
                use: 'she',
                text: 'Note: It is possible to use template-driven forms instead, if you prefer. We use reactive forms in this example because it makes subscribing to changes in the inputs value easy.For this example, be sure to import ReactiveFormsModule from @angular/forms into your NgModule. If you are unfamiliar with using reactive forms, you can read more about the subject in the Angular documentation.'
            },
            {
                id: 'test2',
                use: 'me',
                text: 'Note: It is poss documentation.'
            },
            {
                id: 'test2',
                use: 'she',
                text: 'Note: It is possible because it makes subscribing to changes in the inputs value easy.For this example, be sure to import ReactiveFormsModule from @angular/forms into your NgModule. If you are unfamiliar with using reactive forms, you can read more about the subject in the Angular documentation.'
            },
            {
                id: 'test3',
                use: 'me',
                text: 'from @angular/forms into your NgModule. If you are unfamiliar with using reactive forms, you can read more about the subject in the Angular documentation.'
            },
            {
                id: 'test3',
                use: 'she',
                text: 'to changes in the inputs value easy.For this example, be sure to import ReactiveFormsModule from @angular/forms into your NgModule. If you are unfamiliar with using reactive forms, you can read more about the subject in the Angular documentation.'
            }
            , {
                id: 'test4',
                use: 'me',
                text: 'ReactiveFormsModule from @angular/forms into your NgModule. If you are unfamiliar with using reactive forms, you can read more about the subject in the Angular documentation.'
            },
            {
                id: 'test4',
                use: 'she',
                text: 'Note: It is possible to use template-driven'
            }, {
                id: 'test5',
                use: 'me',
                text: 'Note: It is possible to use '
            },
            {
                id: 'test5',
                use: 'she',
                text: 'Note: It is possible to use template-driven forms instead, if you prefer. We use reactive forms in'
            }
        ]
    }
    ngOnInit(): void {
        this.getDataFromService();
    }
    ngOnChanges(changes: SimpleChanges): void {
        this.getDataFromService();
        let detaildID = changes.DetailID.currentValue;
        let pre = changes.DetailID.previousValue;
        if (detaildID != null) {
            this.list = this.list.filter(r => r.id == detaildID);
        }
    }
    height = (window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight) + 'px';
    @Input() DetailID: string;
    constructor() { }


}
