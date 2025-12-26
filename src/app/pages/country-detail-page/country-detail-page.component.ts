import {Component} from '@angular/core';
import { MedalChartComponent } from "./medal-chart/medal-chart.component";
import { CountryCardComponent } from "./country-card/country-card.component";
import { ActivatedRoute, ParamMap, RouterLink} from '@angular/router';


@Component({
  selector: 'app-country-detail-page',
  standalone: true,
  imports: [MedalChartComponent, CountryCardComponent, RouterLink],
  templateUrl: './country-detail-page.component.html',
  styleUrl: './country-detail-page.component.scss'
})
export class CountryDetailPageComponent{
    countryName:string| null = null;

    constructor(private route: ActivatedRoute) {}
    
    ngOnInit() {
      this.route.paramMap.subscribe((param: ParamMap) =>this.countryName = param.get('countryName'));
    }

}

