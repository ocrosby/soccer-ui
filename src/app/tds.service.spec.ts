import { TestBed } from '@angular/core/testing';

import { TdsService } from './tds.service';

describe('TdsService', () => {
  let service: TdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
