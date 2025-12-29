import { inject, Injectable } from '@angular/core';
import { Olympic } from '../models/olympic';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private olympicArray: Olympic[] = [
  {
    "id": 1,
    "country": "Italy",
    "participations": [
      {
        "id": 1,
        "year": 2012,
        "city": "Londres",
        "medalsCount": 28,
        "athleteCount": 372
      },
      {
        "id": 2,
        "year": 2016,
        "city": "Rio de Janeiro",
        "medalsCount": 28,
        "athleteCount": 375
      },
      {
        "id": 3,
        "year": 2020,
        "city": "Tokyo",
        "medalsCount": 40,
        "athleteCount": 381
      }
    ]
  },
  {
    "id": 2,
    "country": "Spain",
    "participations": [
      {
        "id": 1,
        "year": 2012,
        "city": "Londres",
        "medalsCount": 20,
        "athleteCount": 315
      },
      {
        "id": 2,
        "year": 2016,
        "city": "Rio de Janeiro",
        "medalsCount": 17,
        "athleteCount": 312
      },
      {
        "id": 3,
        "year": 2020,
        "city": "Tokyo",
        "medalsCount": 17,
        "athleteCount": 321
      }
    ]
  },
  {
    "id": 3,
    "country": "United States",
    "participations": [
      {
        "id": 1,
        "year": 2012,
        "city": "Londres",
        "medalsCount": 109,
        "athleteCount": 610
      },
      {
        "id": 2,
        "year": 2016,
        "city": "Rio de Janeiro",
        "medalsCount": 123,
        "athleteCount": 652
      },
      {
        "id": 3,
        "year": 2020,
        "city": "Tokyo",
        "medalsCount": 113,
        "athleteCount": 626
      }
    ]
  },
  {
    "id": 4,
    "country": "Germany",
    "participations": [
      {
        "id": 1,
        "year": 2012,
        "city": "Londres",
        "medalsCount": 44,
        "athleteCount": 425
      },
      {
        "id": 2,
        "year": 2016,
        "city": "Rio de Janeiro",
        "medalsCount": 44,
        "athleteCount": 422
      },
      {
        "id": 3,
        "year": 2020,
        "city": "Tokyo",
        "medalsCount": 37,
        "athleteCount": 425
      }
    ]
  },
  {
    "id": 5,
    "country": "France",
    "participations": [
      {
        "id": 1,
        "year": 2012,
        "city": "Londres",
        "medalsCount": 35,
        "athleteCount": 423
      },
      {
        "id": 2,
        "year": 2016,
        "city": "Rio de Janeiro",
        "medalsCount": 45,
        "athleteCount": 412
      },
      {
        "id": 3,
        "year": 2020,
        "city": "Tokyo",
        "medalsCount": 33,
        "athleteCount": 403
      }
    ]
  }
];

  private route = inject(Router);

  getAllCountries():Olympic[] {
    return [...this.olympicArray];
  }

  getCountryById(id: number): Olympic | undefined {
  const foundIdCountry = this.olympicArray.find(country => country.id === id);
  if  (!foundIdCountry) {
    this.route.navigateByUrl('**');
    throw new Error('Country not found');
  }  
    return foundIdCountry;
  }

  getCountryByCountry(country: string): Olympic | undefined {
  const foundCountry = this.olympicArray.find(item => item.country === country);
  if  (!foundCountry) {
    this.route.navigateByUrl('**');
    throw new Error('Country not found');
  }  
    return foundCountry;
  }
}