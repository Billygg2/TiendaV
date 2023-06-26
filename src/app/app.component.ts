import { Component, OnInit } from '@angular/core';
import { WeatherService } from './service/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  location = { cityName: 'London', countryCode: 'uk' };
  weather: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather(this.location.cityName, this.location.countryCode);
  }

  getWeather(cityName: string, countryCode: string) {
    this.weatherService
      .getWeather(cityName, countryCode)
      .subscribe(
        res => {
          console.log(res);
          this.weather = res;
        },
        err => {
          console.log(err);
        }
      );
  }

  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement) {
    if (cityName.value && countryCode.value) {
      this.getWeather(cityName.value, countryCode.value);

      cityName.value = '';
      countryCode.value = '';
    } else {
      alert('Please. Insert some values');
    }
    cityName.focus();
    return false;
  }


  title = 'tiendavirtual';
  myBackgroundColor = 'rgb(11, 30, 73);'; // definir la propiedad myBackgroundColor

  onBackgroundColorChange(value: string) {
    this.myBackgroundColor = value;
  }


}
