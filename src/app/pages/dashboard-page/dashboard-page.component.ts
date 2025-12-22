import {Component, OnInit} from '@angular/core';
import { Olympic } from 'src/app/models/olympic';
import { PieChartComponent } from './pie-chart/pie-chart.component';


@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [PieChartComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent implements OnInit{
  public totalCountries: number = 0
  public totalJOs: number = 0
  titlePage: string = "Medals per Country";
  public data!:Olympic[];

  constructor() { }
  
  ngOnInit(){ 
    if (this.data && this.data.length > 0) {
      this.totalJOs = Array.from(new Set(this.data.map((i) => i.participations.map((f) => f.year)).flat())).length;
      const countries: string[] = this.data.map((i) => i.country);
      this.totalCountries = countries.length;
    }
  }
}
