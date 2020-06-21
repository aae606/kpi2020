import { Component, OnInit } from '@angular/core';
import * as Highcharts from "highcharts";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-kpi-mdd',
  templateUrl: './kpi-mdd.component.html',
  styleUrls: ['./kpi-mdd.component.scss']
})
export class KpiMddComponent implements OnInit {
  psyApi = "https://sheet.best/api/sheets/b7a2ce1d-d82e-4475-b394-85e6c5dc90ab";
  dataPsy: any = [];
  dataPsy2: Array<string> = [];
  dataPsy3: Array<number> = [];
  dashStyle: any;
  // Spriner
  showSpinner = true;
  data: string;
  Highcharts: typeof Highcharts = Highcharts; // required
  chartOptions: Highcharts.Options = {
    series: [
      {
        type: "column",
        color: "#00ff00",
        data: [],
      },
    ],
  }; // required
  constructor(private http: HttpClient) {}

  async ngOnInit() {
    const req = await this.http.get(this.psyApi).toPromise();
    this.dataPsy = req;
    this.dataPsy2 = this.dataPsy.map((data) => {
      this.data = data;
      this.showSpinner = false;
      return data.ahb;
    });
    this.dataPsy3 = this.dataPsy.map((data) => {
      return parseFloat(data.percen);
    });
    console.log(this.dataPsy2);
    console.log(this.dataPsy3);

    this.chartOptions = {
      title: {
        text: "Prasri Kpi 2020",
      },
      xAxis: {
        categories: this.dataPsy2,
      },
      yAxis: {
        min: 0,
        max: 100,
        title: {
          text: "จำนวน (ราย)",
        },
        maxPadding: 0.2,
        plotLines: [
          {
            color: "#00ff00",
            dashStyle: "Dash",
            width: 1,
            value: 68,
            label: {
              align: "right",
              style: {
                fontStyle: "italic",
              },
              text: "68%",
              x: 1,
            },
          },
        ],
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0,
        },
      },
      series: [
        {
          name: "เขตสุขภาพ",
          type: "column",
          data: this.dataPsy3,
          // data:  [94.46, 83.72, 89.25, 114.19, 65.54, 69.85, 127.43, 114.76, 97.96, 124.41, 91.59, 89.1, 15.9]
        },
      ],
    };
  }

}
