import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';
import { Olympic } from 'src/app/models/olympic';

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent implements OnInit{

public data!:Olympic[];
public pieChart!: Chart<"pie", number[], string>;

constructor(private router: Router) {}

ngOnInit() { 
  if (this.data && this.data.length > 0) {
    const countries: string[] = this.data.map((i) => i.country);
    const medals = this.data.map((i) => i.participations.map((i) => (i.medalsCount)));
    const sumOfAllMedalsYears = medals.map((i) => i.reduce((acc: number, i: number) => acc + i, 0));
    this.buildPieChart(countries, sumOfAllMedalsYears);
  }
}

  buildPieChart(countries: string[], sumOfAllMedalsYears: number[]) {
  const pieChart = new Chart("DashboardPieChart", {
    type: 'pie',
      data: {
        labels: countries,
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
                const countryName = pieChart.data.labels ? pieChart.data.labels[firstPoint.index] : '';
                this.router.navigate(['country', countryName]);
              }
            }
          }
        }
      });
      this.pieChart = pieChart;
  }
}
