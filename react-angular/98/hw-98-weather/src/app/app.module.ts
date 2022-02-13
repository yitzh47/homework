import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherDeatilsComponent } from './weather-deatils/weather-deatils.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDeatilsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
