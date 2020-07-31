import { TestBed } from '@angular/core/testing';

import { ItemsQueryService } from './items-query.service';

describe('ItemsQueryService', () => {
  let service: ItemsQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
