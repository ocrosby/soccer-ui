import { HttpClient } from '@angular/common/http';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';

import { PlayersComponent } from './players.component';

describe('PlayersComponent', () => {
    let component: PlayersComponent;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let fixture: ComponentFixture<PlayersComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                ClarityModule,
                NoopAnimationsModule,
                HttpClientTestingModule,
            ],
            declarations: [PlayersComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(PlayersComponent);

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
