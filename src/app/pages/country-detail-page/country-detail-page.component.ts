import {Component} from '@angular/core';
import { MedalChartComponent } from "./medal-chart/medal-chart.component";
import { CountryCardComponent } from "./country-card/country-card.component";
import { ActivatedRoute, ParamMap, RouterLink} from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-country-detail-page',
  standalone: true,
  imports: [MedalChartComponent, CountryCardComponent, RouterLink],
  templateUrl: './country-detail-page.component.html',
  styleUrl: './country-detail-page.component.scss'
})
export class CountryDetailPageComponent{
    countryName:string| null = null;
    years: number[] | null = null;
    medals: string[] | null = null;

    constructor(private route: ActivatedRoute, private dataService:DataService) {}
    
    ngOnInit() {
      this.route.paramMap.subscribe((param: ParamMap) =>this.countryName = param.get('countryName'));
      const data = this.dataService.getAllCountries();
        if (data && data.length > 0) {
          const selectedCountry = data.find(i => i.country === this.countryName);
          this.years = selectedCountry?.participations.map((i) => i.year) ?? [];
          this.medals = selectedCountry?.participations.map((i) => i.medalsCount.toString()) ?? [];        
        }    
    }

}

