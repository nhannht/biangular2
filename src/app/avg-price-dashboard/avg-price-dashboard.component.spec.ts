import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgPriceDashboardComponent } from './avg-price-dashboard.component';

describe('AvgPriceDashboardComponent', () => {
  let component: AvgPriceDashboardComponent;
  let fixture: ComponentFixture<AvgPriceDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvgPriceDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgPriceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
