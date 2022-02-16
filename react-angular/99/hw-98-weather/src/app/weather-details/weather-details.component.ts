import { Component, Input} from '@angular/core';
import weatherInterface from 'src/weatherInterface';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent {

  @Input() weather!: weatherInterface;
}
