import { Component, OnInit } from '@angular/core';
// import {echarts} from 'echarts'


@Component({
  selector: 'app-op30buy',
  templateUrl: './op30buy.component.html',
  styleUrls: ['./op30buy.component.css']
})
export class Op30buyComponent implements OnInit {
  options: any;
  constructor() { }
  ngOnInit() {
    var that = this 
  setTimeout(function(){
    that.options = {
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
        },
        {
          name: '2012年',
          type: 'bar',
          data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
      ]
    }
  },1000)
    
  }
}
