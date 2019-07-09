import { TestBed } from '@angular/core/testing';

import { CategorySelectService } from './category-select.service';

describe('CategorySelectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategorySelectService = TestBed.get(CategorySelectService);
    expect(service).toBeTruthy();
  });
});
