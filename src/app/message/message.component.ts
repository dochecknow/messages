import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'message-component',
    templateUrl: './message.component.html',
    styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
    height = (window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight) + 'px';

    constructor() { }
    ngOnInit() {
    }
    list=[
        {
            use:'me',
            text: 'Note: It is possible to use template-driven forms instead, if you prefer. We use reactive forms in this example because it makes subscribing to changes in the inputs value easy.For this example, be sure to import ReactiveFormsModule from @angular/forms into your NgModule. If you are unfamiliar with using reactive forms, you can read more about the subject in the Angular documentation.'
        },
        {
            use: 'she',
            text: 'Note: It is possible to use template-driven forms instead, if you prefer. We use reactive forms in this example because it makes subscribing to changes in the inputs value easy.For this example, be sure to import ReactiveFormsModule from @angular/forms into your NgModule. If you are unfamiliar with using reactive forms, you can read more about the subject in the Angular documentation.'
        }
    ]
}
