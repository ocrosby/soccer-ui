import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferSummaryComponent } from './transfer-summary.component';

describe('TransferSummaryComponent', () => {
  let component: TransferSummaryComponent;
  let fixture: ComponentFixture<TransferSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
