import { Component } from '@angular/core';
import { weatherApi } from './weather';
import weatherInterface from 'src/weatherInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw-98-weather';

  zipOfWeather!: string;
  invalidZip!: boolean;
  weather!: weatherInterface;


  validateZip(zip: string){
    if(zip.length === 5 && Number(zip)){
      this.zipOfWeather = zip;
      console.log(this.zipOfWeather);
      this.changeZip();
      this.invalidZip = false;
    }
    else{
      this.invalidZip = true;
    }
    
  }

  changeZip(){
    console.log("In change zip", this.zipOfWeather, typeof(this.zipOfWeather));
    let x = this.zipOfWeather;
    this.weather = (weatherApi as any)[x];
  }
}
