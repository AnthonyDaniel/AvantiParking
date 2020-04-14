import { TestBed } from '@angular/core/testing';

import { MyReservesServiceService } from './my-reserves-service.service';

describe('MyReservesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyReservesServiceService = TestBed.get(MyReservesServiceService);
    expect(service).toBeTruthy();
  });
});
