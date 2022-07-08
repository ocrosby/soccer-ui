import { TestBed } from '@angular/core/testing';

import { EcnlService } from './ecnl.service';

describe('EcnlService', () => {
    let service: EcnlService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(EcnlService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
