import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';

import { ConfigComponent } from './config.component';

describe('ConfigComponent', () => {
    let component: ConfigComponent;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let fixture: ComponentFixture<ConfigComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ClarityModule, NoopAnimationsModule, HttpClientTestingModule],
            declarations: [ConfigComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ConfigComponent);

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
