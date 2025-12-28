import {Component, OnInit} from '@angular/core';
import { PieChartComponent } from 'src/app/components/pie-chart/pie-chart.component';
import { DataService } from 'src/app/services/data.service';
import { StatisticsComponent } from "src/app/components/statistics/statistics.component";
import { Statistics } from 'src/app/models/statistics';


@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [PieChartComponent, StatisticsComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent implements OnInit{
  public totalCountries: number = 0
  public totalJOs: number = 0
  statisticsData: Statistics[] = [];
  countries:string[] = [];
  constructor(private dataService:DataService) { }
  
  ngOnInit(){ 
    const data = this.dataService.getAllCountries();
    if (data && data.length > 0) {
      this.totalJOs = Array.from(new Set(data.map((i) => i.participations.map((f) => f.year)).flat())).length;
      const countries: string[] = data.map((i) => i.country);
      this.totalCountries = countries.length;
      this.statisticsData = [
        { label: 'Number of Countries', value: this.totalCountries },
        { label: 'Number of JOs', value: this.totalJOs }
      ];   
  };
}
}