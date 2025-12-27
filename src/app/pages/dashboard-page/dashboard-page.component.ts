import {Component, OnInit} from '@angular/core';
import { PieChartComponent } from 'src/app/components/pie-chart/pie-chart.component';
import { DataService } from 'src/app/services/data.service';


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

  constructor(private dataService:DataService) { }
  
  ngOnInit(){ 
    const data = this.dataService.getAllCountries();
    if (data && data.length > 0) {
      this.totalJOs = Array.from(new Set(data.map((i) => i.participations.map((f) => f.year)).flat())).length;
      const countries: string[] = data.map((i) => i.country);
      this.totalCountries = countries.length;
    }
  }
}
