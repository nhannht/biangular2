import { TestBed } from '@angular/core/testing';

import { AllSymbolPriceService } from './all-symbol-price.service';

describe('AllSymbolPriceService', () => {
  let service: AllSymbolPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllSymbolPriceService);
  });

  it('should be created', () => {
    expect(service.getOnlySymbols).toBeTruthy();
  });
});
