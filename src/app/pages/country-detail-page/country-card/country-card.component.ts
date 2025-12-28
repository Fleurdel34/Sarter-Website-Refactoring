import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss'
})
export class CountryCardComponent implements OnInit{

  public titlePage!: string;
  public totalEntries!: number;
  public totalMedals!: number;
  public totalAthletes!: number;
  @Input() id: string|null = null;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    const data = this.dataService.getAllCountries();
    if (data && data.length > 0) {
      const selectedCountry = data.find(i => i.id === parseInt(this.id!));
      this.titlePage = selectedCountry?.country ?? '';
      const participations = selectedCountry?.participations.map((i) => i);
      this.totalEntries = participations?.length ?? 0;
      const medals = selectedCountry?.participations.map((i) => i.medalsCount.toString()) ?? [];
      this.totalMedals = medals.reduce((accumulator: number, item: string) => accumulator + parseInt(item), 0);
      const nbAthletes = selectedCountry?.participations.map((i) => i.athleteCount.toString()) ?? []
      this.totalAthletes = nbAthletes.reduce((accumulator: number, item: string) => accumulator + parseInt(item), 0);
      }   
    }

}
