import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

export interface WeatherData {
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '55a9da7049e4acfeb55d5d8c44b05c38';
  URI = '';

  constructor(private http: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
  }

  getWeather(cityName: string, countryCode: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(`${this.URI}${cityName},${countryCode}`);
  }
}
