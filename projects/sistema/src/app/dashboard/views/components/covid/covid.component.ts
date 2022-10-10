import { Component, OnInit } from '@angular/core';
import { CovidApplication } from '../../../application/covid.application';
import { Graph } from '../../../domain/graph.interface';

@Component({
  selector: 'amb-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  view: [number, number] = [600, 400];
  schema = "natural";
  xAxis = true;
  yAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  showLegend = false;
  xAxisLabel = "Countries";
  yAxisLabel = "Confirmed cases";

  dataCovid: Graph[] = [];

  constructor(private readonly covidApplication: CovidApplication) { }

  ngOnInit(): void {
    this.covidApplication.getCovidData().subscribe((data: Graph[]) => {
      this.dataCovid = data;
    })
  }

}
