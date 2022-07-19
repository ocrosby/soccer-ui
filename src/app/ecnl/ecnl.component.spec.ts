import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcnlComponent } from './ecnl.component';

describe('EcnlComponent', () => {
  let component: EcnlComponent;
  let fixture: ComponentFixture<EcnlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcnlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcnlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
