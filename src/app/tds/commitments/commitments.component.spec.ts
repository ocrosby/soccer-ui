import { HttpClient } from '@angular/common/http';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';

import { CommitmentsComponent } from './commitments.component';

describe('CommitmentsComponent', () => {
    let component: CommitmentsComponent;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let fixture: ComponentFixture<CommitmentsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                MaterialModule,
                NoopAnimationsModule,
                HttpClientTestingModule,
            ],
            declarations: [CommitmentsComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CommitmentsComponent);

        // Inject the http service and test controller for each test
        httpClient = TestBed.inject(HttpClient);
        httpTestingController = TestBed.inject(HttpTestingController);

        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
