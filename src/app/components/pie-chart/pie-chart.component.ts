import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent implements OnInit{

public pieChart!: Chart<"pie", number[], string>;

constructor(private router: Router, private dataService:DataService) {}

ngOnInit() { 
  const data = this.dataService.getAllCountries();
  if (data && data.length > 0) {
    const idCountries = data.map(item => ({id: item.id.toString(), country: item.country}));
    const medals = data.map((i) => i.participations.map((i) => (i.medalsCount)));
    const sumOfAllMedalsYears = medals.map((i) => i.reduce((acc: number, i: number) => acc + i, 0));
    this.buildPieChart(idCountries, sumOfAllMedalsYears);
  }
}

  buildPieChart(countries: {id: string, country: string}[], sumOfAllMedalsYears: number[]) {
  const pieChart = new Chart("DashboardPieChart", {
    type: 'pie',
      data: {
        labels: countries.map(i => i.country),
        datasets: [{
        label: 'Medals',
        data: sumOfAllMedalsYears,
        backgroundColor: ['#0b868f', '#adc3de', '#7a3c53', '#8f6263', 'orange', '#94819d'],
        hoverOffset: 4
        }],
      },
      options: {
        aspectRatio: 2.5,
          onClick: (e) => {
            if (e.native) {
              const points = pieChart.getElementsAtEventForMode(e.native, 'point', { intersect: true }, true)
              if (points.length) {
                const firstPoint = points[0];
                const countryid = countries[firstPoint.index].id;
                this.router.navigate(['country', countryid]);
              }
            }
          }
        }
      });
      this.pieChart = pieChart;
  }
}
