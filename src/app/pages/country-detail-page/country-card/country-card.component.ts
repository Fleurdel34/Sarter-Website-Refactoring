import { Component, Input, OnInit } from '@angular/core';
import { Olympic } from 'src/app/models/olympic';

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
  @Input() countryName: string|null = null;
  public data!:Olympic[];

  constructor() {}

  ngOnInit() {
    if (this.data && this.data.length > 0) {
      const selectedCountry = this.data.find(i => i.country === this.countryName);
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
