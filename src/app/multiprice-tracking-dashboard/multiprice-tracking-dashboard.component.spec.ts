import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipriceTrackingDashboardComponent } from './multiprice-tracking-dashboard.component';

describe('MultipriceTrackingDashboardComponent', () => {
  let component: MultipriceTrackingDashboardComponent;
  let fixture: ComponentFixture<MultipriceTrackingDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipriceTrackingDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipriceTrackingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
