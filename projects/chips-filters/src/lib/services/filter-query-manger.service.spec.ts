import { TestBed } from '@angular/core/testing';

import { FilterQueryMangerService } from './filter-query-manger.service';

describe('FilterQueryMangerService', () => {
  let service: FilterQueryMangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterQueryMangerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
