import { TestBed } from '@angular/core/testing';

import { LimitSelectService } from './limit-select.service';

describe('LimitSelectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LimitSelectService = TestBed.get(LimitSelectService);
    expect(service).toBeTruthy();
  });
});
