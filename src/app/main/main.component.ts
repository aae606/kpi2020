import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  psy: any = [];
  dataPsy: any = [];
  dataPsy2: any = [];
  dataPsy3: any = [];

  constructor(private http: HttpClient) { }

highcharts = Highcharts;
  chartOptions = {
    chart: {
      type: 'column'
   },
   title: {
      text: 'Prasri Kpi 2020'
   },      xAxis: {
         categories: `${this.dataPsy2}`
        //  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
        //  'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        //  crosshair: true
      },
      yAxis : {
         min: 0,
         title: {
            text: 'จำนวน (ราย)'
         }
      },
      plotOptions : {
         column: {
            pointPadding: 0.2,
            borderWidth: 0
         }
      },
      series: [{
         name: 'เขตสุขภาพ',
         data: this.dataPsy3
        //  data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6,
        //     148.5, 216.4, 194.1, 95.6, 54.4]
      }]
  };

  psyApi = 'https://sheet.best/api/sheets/b7a2ce1d-d82e-4475-b394-85e6c5dc90ab';
  async ngOnInit() {
    await this.getPsy();
    // alert( this.dataPsy2);
    // alert( this.dataPsy3);
  }
  async getPsy() {
    const req = await this.http.get(this.psyApi).toPromise();
    this.dataPsy = req;
    this.dataPsy2 = this.dataPsy.map( (data) => {
      return data.ahb;
    });
    this.dataPsy3 = this.dataPsy.map( (data) => {
      return parseFloat( data.percen );
    });
    console.log(this.dataPsy2);
    console.log(this.dataPsy3);
  }
}
