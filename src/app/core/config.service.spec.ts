// Http testing module and mocking controller
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';


import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { ConfigService } from './config.service';

describe('ConfigService', () => {
    let service: ConfigService;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });

        // Inject the http service and test controller for each test
        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);

        service = TestBed.inject(ConfigService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
