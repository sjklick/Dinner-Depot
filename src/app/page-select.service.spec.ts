import { TestBed } from '@angular/core/testing';

import { PageSelectService } from './page-select.service';

describe('PageSelectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageSelectService = TestBed.get(PageSelectService);
    expect(service).toBeTruthy();
  });
});
