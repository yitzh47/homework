import { Component, Output } from '@angular/core';
import Person from './Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  persons: Person[] = [{
    name: 'Michelle',
    age: 21,
    address: 'yates estate',
  },
  {
    name: 'Isaac',
    age: 23,
    address: 'Olympia Boulevard',
  }];

}
