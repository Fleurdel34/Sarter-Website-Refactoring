import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-medal-chart',
  standalone: true,
  imports: [],
  templateUrl: './medal-chart.component.html',
  styleUrl: './medal-chart.component.scss'
})

export class MedalChartComponent implements  OnInit {

  
  public lineChart!: Chart<"line", string[], number>;

  @Input() years: number[]| null = null;
  @Input() medals: string[]| null = null;
  @Input() label:string| null = null;
  @Input() backgroundColor:string| null = null;
  
  constructor() { }

  ngOnInit() {
    this.buildChart(this.years || [], this.medals || [], this.label || '', this.backgroundColor || '');}

  buildChart(years: number[], medals: string[], label:string, backgroundColor:string) {
    const lineChart = new Chart("countryChart", {
      type: 'line',
      data: {
        labels: years,
        datasets: [
          {
            label: label,
            data: medals,
            backgroundColor: backgroundColor
          },
        ]
      },
      options: {
        aspectRatio: 2.5
      }
    });
    this.lineChart = lineChart;
  }

}
