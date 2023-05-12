import { Component, OnInit } from '@angular/core';
import { IonicModule, IonicSwiper } from '@ionic/angular';
import {WeatherService} from '../weather.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HomePage } from '../home/home.page';
import { RouterModule } from '@angular/router';


import{NgFor} from '@angular/common';
import { DataService } from '../data.service';
import { DailyPage } from '../daily/daily.page';
@Component({
  selector: 'app-forcast',
  templateUrl: './forcast.page.html',
  styleUrls: ['./forcast.page.scss'],
  standalone: true,
  imports: [IonicModule, HttpClientModule, NgFor, CommonModule, RouterModule],
  providers:[WeatherService]
})

export class ForcastPage{


  constructor(private weatherData: WeatherService, private Selected:DataService) {}
  

  selected:string ="";  
  Weather:any[]=[];
  extra:string = "";
  increment: number = 0;
  current_temp:string= "";
  dailyWeather:any[]=[];
    nextDay: string = "";
    days: string[] = [];
    lat: string ="";
    lon: string = "";

  ionViewWillEnter(){
    this.selected = this.Selected.selection;
    this.weatherData.getCoords(this.selected).subscribe(//selected country is passed through an API to receive the coordinates
      (data)=>{
          this.lat = data[0].lat;
          this.lon = data[0].lon;
          console.log("lat = " + this.lat);
          console.log("lon = " + this.lon);
          this.weatherData.getWeatherData(this.lat, this.lon).subscribe(//coordinates received are passed through the API and  data is returned
          (data)=>{
          this.dailyWeather = data.daily;
          this.Weather = data;
          this.Selected.onSend(this.dailyWeather);
    
        
      }
    );
      }
    ); 
  }





   ngOnInit() {

    document.body.style.overflow = 'hidden';
   
    this.selected = this.Selected.selection; //value of selected country is saved into the variable from the service page
    console.log("data " + this.selected);


}

}

