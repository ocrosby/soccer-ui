import { TestBed } from '@angular/core/testing';

import { NwslService } from './nwsl.service';

describe('NwslService', () => {
  let service: NwslService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NwslService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
