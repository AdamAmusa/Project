import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

selection:string ="";

  constructor() { }


setValue(value: string){

  this.selection= value;//sets the value of the "selection" variable to the value of the variable passed into the function from the home page
  
}



}
