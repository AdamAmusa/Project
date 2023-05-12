import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { DataService } from '../data.service';
import { ForcastPage } from '../forcast/forcast.page';


@Component({
  selector: 'app-daily',
  templateUrl: './daily.page.html',
  styleUrls: ['./daily.page.scss'],
})
export class DailyPage implements OnInit {

 constructor(private weatherData: ForcastPage, private send:DataService) {}
  selected:string = "";
  dailyWeather:any[]=[];

  days:string[] = [];
  daysofWeek:any[] =[];
 i:number = 0;
 
  
ngOnInit() {
this.dailyWeather = this.send.dailyWeather;
console.log(this.dailyWeather);



const date = new Date();
this.days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dayIncrement = date.getDay() + 1;


for(let i = 0; i <= 7; i++){

  if(dayIncrement == 6){
    this.daysofWeek.push(this.days[dayIncrement]);
    dayIncrement = 0;
  }


  else{
    this.daysofWeek.push(this.days[dayIncrement]);
    dayIncrement++;
  }

  
}


}


}

