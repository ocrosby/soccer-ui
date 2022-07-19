import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../material.module';

import { UscRankingsComponent } from './usc-rankings.component';

describe('UscRankingsComponent', () => {
    let component: UscRankingsComponent;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let fixture: ComponentFixture<UscRankingsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MaterialModule, NoopAnimationsModule, HttpClientTestingModule],
            declarations: [UscRankingsComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(UscRankingsComponent);

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
