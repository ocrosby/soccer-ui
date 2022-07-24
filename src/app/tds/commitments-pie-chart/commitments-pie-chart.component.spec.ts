import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitmentsPieChartComponent } from './commitments-pie-chart.component';

describe('CommitmentsPieChartComponent', () => {
  let component: CommitmentsPieChartComponent;
  let fixture: ComponentFixture<CommitmentsPieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitmentsPieChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitmentsPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
