import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../../material.module';

import { ClubsComponent } from './clubs.component';

describe('ClubsComponent', () => {
    let component: ClubsComponent;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let fixture: ComponentFixture<ClubsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FormsModule, MaterialModule, SharedModule, NoopAnimationsModule, HttpClientTestingModule],
            declarations: [ClubsComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ClubsComponent);

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
