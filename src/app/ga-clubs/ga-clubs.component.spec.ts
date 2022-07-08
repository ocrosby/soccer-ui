import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaClubsComponent } from './ga-clubs.component';

describe('GaClubsComponent', () => {
  let component: GaClubsComponent;
  let fixture: ComponentFixture<GaClubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaClubsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
