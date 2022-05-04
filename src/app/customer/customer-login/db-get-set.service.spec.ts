import { TestBed } from '@angular/core/testing';

import { DbGetSetService } from './db-get-set.service';

describe('DbGetSetService', () => {
  let service: DbGetSetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbGetSetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
