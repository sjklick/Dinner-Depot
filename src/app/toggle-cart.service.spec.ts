import { TestBed } from '@angular/core/testing';

import { ToggleCartService } from './toggle-cart.service';

describe('ToggleCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToggleCartService = TestBed.get(ToggleCartService);
    expect(service).toBeTruthy();
  });
});
