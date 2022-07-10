import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UscRankingsComponent } from './usc-rankings.component';

describe('UscRankingsComponent', () => {
  let component: UscRankingsComponent;
  let fixture: ComponentFixture<UscRankingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UscRankingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UscRankingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
