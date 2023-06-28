import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../service/weather.service';

interface WeatherData {
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

@Component({
  selector: 'app-climaapi',
  templateUrl: './climaapi.component.html',
  styleUrls: ['./climaapi.component.scss']
})
export class ClimaapiComponent implements OnInit, OnDestroy {
  location = { cityName: 'London', countryCode: 'uk' };
  weather: WeatherData | undefined;
  formularioEliminado = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather(this.location.cityName, this.location.countryCode);
  }

  ngOnDestroy() {
    console.log("El formulario se ha eliminado");
  }

  @Input() set weatherData(data: WeatherData) {
    data
    console.log("Se ha consultado el clima de una Ciudad con su Pais");
  }

  getWeather(cityName: string, countryCode: string) {
    this.weatherService
      .getWeather(cityName, countryCode)
      .subscribe(
        res => {
        console.log(res);
        this.weather = res;
        this.weatherData = res;
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
      alert('Por favor inserte lo mencionado');
    }
    cityName.focus();

    if (this.formularioEliminado) {
      return false;
    } else {
      return true;
    }
  }

  eliminarFormulario(formulario: HTMLFormElement) {
    formulario.remove();
    console.log("El formulario se ha eliminado");
  }
}
