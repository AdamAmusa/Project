import { Component, isStandalone } from '@angular/core';
import { ForcastPage } from '../forcast/forcast.page';
import { WeatherService } from '../weather.service';
import { DataService } from '../data.service';
import{Storage} from '@ionic/storage-angular';
import { Browser } from '@capacitor/browser';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage{
selectedCountry:string = "";
savedCountries:string[]= [];

  
  onSelect(){
    console.log(this.selectedCountry);
    this.Selected.setValue(this.selectedCountry);//selected country is sent to service page to store the name of the country
    console.log(this.Selected.selection);
  }
constructor(private Selected:DataService, private country:Storage) {}

  async saveCountries(){
    await this.country.set("Country", this.selectedCountry); //assigns key and value 
    
    const keys = await this.country.keys(); //gets the key values
    for(const key of keys){ //loops through saved items and adds to the array 
      const value = await this.country.get(key);
      this.savedCountries.push(value);
    }
 
  }
  
async openLink(){
  await Browser.open({url : 'https://openweathermap.org/api'});//opens up link on click
}



async ngOnInit() {
  await this.country.create();
  
}

}

