import { TestBed } from '@angular/core/testing';

import { Fetch24HoursDataService } from './fetch-24-hours-data.service';

describe('Fetch24HoursDataService', () => {
  let service: Fetch24HoursDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fetch24HoursDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
