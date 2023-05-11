import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HomePage } from './home/home.page';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  select:string = "";
  lat:string="";
  lon:string="";
  constructor(private http:HttpClient, private selected:DataService){}

getWeatherData(lat:string, lon:string):Observable<any>{

    return this.http.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=12294ecb5788bdb60de3c4ba90486561`);//API that retrieves weather data based off of the coordinates of the country
  }

getCoords(select:string):Observable<any>{
  console.log(select);
    //console.log('https://api.openweathermap.org/geo/1.0/direct?q=${select},&limit=&appid=12294ecb5788bdb60de3c4ba90486561');
    return this.http.get(`https://api.openweathermap.org/geo/1.0/direct?q=${select},&limit=&appid=12294ecb5788bdb60de3c4ba90486561`);//API to retrieve coordinates of country
  }

}
