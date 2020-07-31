import { TestBed } from '@angular/core/testing';

import { HomesQueryService } from './homes-query.service';

describe('HomesQueryService', () => {
  let service: HomesQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomesQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
