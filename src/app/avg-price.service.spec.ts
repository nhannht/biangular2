import { TestBed } from '@angular/core/testing';

import { AvgPriceService } from './avg-price.service';

describe('AvgPriceService', () => {
  let service: AvgPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvgPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
