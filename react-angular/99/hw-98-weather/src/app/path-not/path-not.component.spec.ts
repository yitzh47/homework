import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathNotComponent } from './path-not.component';

describe('PathNotComponent', () => {
  let component: PathNotComponent;
  let fixture: ComponentFixture<PathNotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathNotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathNotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
