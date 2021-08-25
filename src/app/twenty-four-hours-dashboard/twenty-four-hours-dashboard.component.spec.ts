import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyFourHoursDashboardComponent } from './twenty-four-hours-dashboard.component';

describe('TwentyFourHoursDashboardComponent', () => {
  let component: TwentyFourHoursDashboardComponent;
  let fixture: ComponentFixture<TwentyFourHoursDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwentyFourHoursDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwentyFourHoursDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
