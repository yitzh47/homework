import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDeatilsComponent } from './weather-deatils.component';

describe('WeatherDeatilsComponent', () => {
  let component: WeatherDeatilsComponent;
  let fixture: ComponentFixture<WeatherDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherDeatilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
