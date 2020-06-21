import { Component, OnInit } from "@angular/core";
import { ChartType } from "chart.js";
import { MultiDataSet, Label } from "ng2-charts";
@Component({
  selector: "app-toptenpie",
  templateUrl: "./toptenpie.component.html",
  styleUrls: ["./toptenpie.component.scss"],
})
export class ToptenpieComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: Label[] = ["ชาย", "หญิง"];
  public doughnutChartData: MultiDataSet = [[1350, 1450]];
  public doughnutChartType: ChartType = "doughnut";
  constructor() {}

  ngOnInit() {}
}
