import {Component} from '@angular/core';
import { MedalChartComponent } from "./medal-chart/medal-chart.component";
import { ActivatedRoute, ParamMap, RouterLink} from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { StatisticsComponent } from 'src/app/components/statistics/statistics.component';
import { Statistics } from 'src/app/models/statistics';


@Component({
  selector: 'app-country-detail-page',
  standalone: true,
  imports: [MedalChartComponent, RouterLink, StatisticsComponent],
  templateUrl: './country-detail-page.component.html',
  styleUrl: './country-detail-page.component.scss'
})
export class CountryDetailPageComponent{
    id:string| null = null;
    years: number[] | null = null;
    medals: string[] | null = null;
    titlePage!: string;
    totalEntries!: number;
    totalMedals!: number;
    totalAthletes!: number;
    statisticsData: Statistics[] = [];


    constructor(private route: ActivatedRoute, private dataService:DataService) {}
    
    ngOnInit() {
      this.route.paramMap.subscribe((param: ParamMap) =>this.id = param.get('id'));
      const countryid = this.route.snapshot.params['id'];
      const countryidNumber = parseInt(countryid);
      this.dataService.getCountryById(countryidNumber);
      const data = this.dataService.getAllCountries();
        if (data && data.length > 0) {
          const selectedCountry = data.find(i => i.id === parseInt(this.id!));
          this.years = selectedCountry?.participations.map((i) => i.year) ?? [];
          this.medals = selectedCountry?.participations.map((i) => i.medalsCount.toString()) ?? [];
          this.titlePage = selectedCountry?.country ?? '';
          const countryData = this.titlePage;
          if (!countryData) {
            this.dataService.getCountryByCountry(this.titlePage);
          }
          const participations = selectedCountry?.participations.map((i) => i);
          this.totalEntries = participations?.length ?? 0;
          const medals = selectedCountry?.participations.map((i) => i.medalsCount.toString()) ?? [];
          this.totalMedals = medals.reduce((accumulator: number, item: string) => accumulator + parseInt(item), 0);
          const nbAthletes = selectedCountry?.participations.map((i) => i.athleteCount.toString()) ?? []
          this.totalAthletes = nbAthletes.reduce((accumulator: number, item: string) => accumulator + parseInt(item), 0);   
          this.statisticsData = [
          { label: 'Number of entries', value: this.totalEntries },
          { label: 'Total Number of medals', value: this.totalMedals},
          { label: 'Total Number of athletes', value: this.totalAthletes}
          ];        
        }    
    }

}

