import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-op10sell',
  templateUrl: './op10sell.component.html',
  styleUrls: ['./op10sell.component.css']
})
export class Op10sellComponent implements OnInit {

  options: any;
  constructor() { }
  ngOnInit() {
    var that = this 
  setTimeout(function(){
    that.options = {
      color: ['#cd8d45'],
      title: {
        text: 'Sales Dashboard'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: ['Open offers', 'Bids Received', 'Negotiations', 'Info Requests', 'Orders Confirmed', 'Not Converted']
      },
      series: [
        {
          name: '2011年',
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744, 630230]
        }
      ]
    }
  },1000)
    
  }
}
