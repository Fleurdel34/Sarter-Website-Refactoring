import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { Olympic } from 'src/app/models/olympic';

@Component({
  selector: 'app-medal-chart',
  standalone: true,
  imports: [],
  templateUrl: './medal-chart.component.html',
  styleUrl: './medal-chart.component.scss'
})

export class MedalChartComponent implements  OnInit {

  public lineChart!: Chart<"line", string[], number>;
  public data!:Olympic[];
  @Input() countryName: string| null = null;

  constructor() {}

  ngOnInit() {
    if (this.data && this.data.length > 0) {
      const selectedCountry = this.data.find(i => i.country === this.countryName);
      const years = selectedCountry?.participations.map((i) => i.year) ?? [];
      const medals = selectedCountry?.participations.map((i) => i.medalsCount.toString()) ?? [];
      this.buildChart(years, medals);
    } 
  }

  buildChart(years: number[], medals: string[]) {
    const lineChart = new Chart("countryChart", {
      type: 'line',
      data: {
        labels: years,
        datasets: [
          {
            label: "medals",
            data: medals,
            backgroundColor: '#0b868f'
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
