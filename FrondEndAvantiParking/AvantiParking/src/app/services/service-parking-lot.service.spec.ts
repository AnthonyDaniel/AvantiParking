import { TestBed } from '@angular/core/testing';

import { ServiceParkingLotService } from './service-parking-lot.service';

describe('ServiceParkingLotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceParkingLotService = TestBed.get(ServiceParkingLotService);
    expect(service).toBeTruthy();
  });
});
