import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'offers-sent',
  templateUrl: './offers-sent.component.html',
  styleUrls: ['./offers-sent.component.css']
})
export class OffersSentComponent implements OnInit {

  data: any;
  model: any;
  ngOnInit(): void {
    this.getDataFromService();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.getDataFromService();
    let detaildID = changes.detailID.currentValue;
    let pre = changes.detailID.previousValue;
    if (detaildID != null) {
      this.model = this.data.filter(r => r.id == detaildID)[0];
      console.info(this.model);
    }
  }
  height = (window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight) + 'px';
  @Input() detailID: string;
  constructor() { }
  getDataFromService(): void {
    this.data = [
      {
        id: 'test1',
        use: 'me',
        text: 'Note: It is possible to use template-driven forms instead, if you prefer. We use reactive forms in this example because it makes subscribing to changes in the inputs value easy.For this example, be sure to import ReactiveFormsModule from @angular/forms into your NgModule. If you are unfamiliar with using reactive forms, you can read more about the subject in the Angular documentation.'
      },
      {
        id: 'test2',
        use: 'me',
        text: 'Note: It is poss documentation.'
      },
      {
        id: 'test3',
        use: 'me',
        text: 'from @angular/forms into your NgModule. If you are unfamiliar with using reactive forms, you can read more about the subject in the Angular documentation.'
      }
      , {
        id: 'test4',
        use: 'me',
        text: 'ReactiveFormsModule from @angular/forms into your NgModule. If you are unfamiliar with using reactive forms, you can read more about the subject in the Angular documentation.'
      }, {
        id: 'test5',
        use: 'me',
        text: 'Note: It is possible to use '
      }
    ]
    this.model = this.data[0];
  }
}
