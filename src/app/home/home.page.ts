import { Component, isStandalone } from '@angular/core';
import { ForcastPage } from '../forcast/forcast.page';
import { WeatherService } from '../weather.service';
import { DataService } from '../data.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage{
selectedCountry:string = "";


  
  onSelect(){
    console.log(this.selectedCountry);
    this.Selected.setValue(this.selectedCountry);//selected country is sent to service page to store the name of the country
    console.log(this.Selected.selection);
  }

constructor(private Selected:DataService) {}

  



}
