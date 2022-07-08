import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcnlClubsComponent } from './ecnl-clubs.component';

describe('EcnlClubsComponent', () => {
  let component: EcnlClubsComponent;
  let fixture: ComponentFixture<EcnlClubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcnlClubsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcnlClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
