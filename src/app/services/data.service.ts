import { inject, Injectable } from '@angular/core';
import { Olympic } from '../models/olympic';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private olympicUrl = './assets/mock/olympic.json';
  private http = inject(HttpClient);

  getAllCountries():Observable<Olympic[]> {
    return this.http.get<Olympic[]>(this.olympicUrl);
  }

  getOneCountry(countryName: string):Observable<Olympic> {  
    return this.http.get<Olympic>(`${this.olympicUrl}?country=${countryName}`);
  }
}
