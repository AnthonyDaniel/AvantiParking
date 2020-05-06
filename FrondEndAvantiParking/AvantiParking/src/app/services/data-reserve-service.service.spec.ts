import { TestBed } from '@angular/core/testing';

import { DataReserveServiceService } from './data-reserve-service.service';

describe('DataReserveServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataReserveServiceService = TestBed.get(DataReserveServiceService);
    expect(service).toBeTruthy();
  });
});
