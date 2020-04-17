import { TestBed } from '@angular/core/testing';

import { AdminAfterService } from './admin-after.service';

describe('AdminAfterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminAfterService = TestBed.get(AdminAfterService);
    expect(service).toBeTruthy();
  });
});
