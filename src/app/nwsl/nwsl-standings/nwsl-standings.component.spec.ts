import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwslStandingsComponent } from './nwsl-standings.component';

describe('NwslStandingsComponent', () => {
  let component: NwslStandingsComponent;
  let fixture: ComponentFixture<NwslStandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwslStandingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NwslStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
