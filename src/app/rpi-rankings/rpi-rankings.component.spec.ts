import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpiRankingsComponent } from './rpi-rankings.component';

describe('RpiRankingsComponent', () => {
  let component: RpiRankingsComponent;
  let fixture: ComponentFixture<RpiRankingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpiRankingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpiRankingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
