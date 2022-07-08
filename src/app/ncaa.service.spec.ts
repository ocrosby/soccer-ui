import { TestBed } from '@angular/core/testing';

import { NcaaService } from './ncaa.service';

describe('NcaaService', () => {
  let service: NcaaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NcaaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
