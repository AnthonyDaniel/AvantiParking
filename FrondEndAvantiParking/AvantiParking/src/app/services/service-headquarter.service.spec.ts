import { TestBed } from '@angular/core/testing';

import { ServiceHeadquarterService } from './service-headquarter.service';

describe('ServiceHeadquarterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceHeadquarterService = TestBed.get(ServiceHeadquarterService);
    expect(service).toBeTruthy();
  });
});
