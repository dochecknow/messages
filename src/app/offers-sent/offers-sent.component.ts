import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'offers-sent',
  templateUrl: './offers-sent.component.html',
  styleUrls: ['./offers-sent.component.css']
})
export class OffersSentComponent implements OnInit {

  data: any;
  model: any;
  ngOnInit(): void {
  }
  height = (window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight) + 'px';
  @Input() detailData = new Observable<any>();
  constructor() { }

}
