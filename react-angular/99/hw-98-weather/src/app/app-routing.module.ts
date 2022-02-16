import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { PathNotComponent } from './path-not/path-not.component';


const routes: Routes = [
  {
    path: 'weather',
    component: WeatherDetailsComponent
  },
  {
    path: '**',
    component: PathNotComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
