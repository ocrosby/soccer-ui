import { TestBed } from '@angular/core/testing';

import { GaService } from './ga.service';

describe('GaService', () => {
  let service: GaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
