// Http testing module and mocking controller
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';


import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';


import { TdsService } from './tds.service';

describe('TdsService', () => {
    let service: TdsService;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });

        // Inject the http service and test controller for each test
        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);

        service = TestBed.inject(TdsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
