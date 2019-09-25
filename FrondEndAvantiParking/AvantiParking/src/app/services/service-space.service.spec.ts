import { TestBed } from '@angular/core/testing';

import { ServiceSpaceService } from './service-space.service';

describe('ServiceSpaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceSpaceService = TestBed.get(ServiceSpaceService);
    expect(service).toBeTruthy();
  });
});
