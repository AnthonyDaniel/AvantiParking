import { TestBed } from '@angular/core/testing';

import { ServiceZoneService } from './service-zone.service';

describe('ServiceZoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceZoneService = TestBed.get(ServiceZoneService);
    expect(service).toBeTruthy();
  });
});
