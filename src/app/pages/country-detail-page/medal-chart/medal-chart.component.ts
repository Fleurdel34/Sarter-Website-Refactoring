import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-medal-chart',
  standalone: true,
  imports: [],
  templateUrl: './medal-chart.component.html',
  styleUrl: './medal-chart.component.scss'
})

export class MedalChartComponent implements  OnInit {

  public lineChart!: Chart<"line", string[], number>;
  @Input() countryName: string| null = null;

  
  constructor(private dataService:DataService) { }

  ngOnInit() {
    const data = this.dataService.getAllCountries();
    if (data && data.length > 0) {
      const selectedCountry = data.find(i => i.country === this.countryName);
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
