import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';

import { RpiRankingsComponent } from './rpi-rankings.component';

describe('RpiRankingsComponent', () => {
    let component: RpiRankingsComponent;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let fixture: ComponentFixture<RpiRankingsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MaterialModule, NoopAnimationsModule, HttpClientTestingModule],
            declarations: [RpiRankingsComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(RpiRankingsComponent);

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
