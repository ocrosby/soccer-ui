import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwslDashboardComponent } from './nwsl-dashboard.component';

describe('NwslDashboardComponent', () => {
  let component: NwslDashboardComponent;
  let fixture: ComponentFixture<NwslDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwslDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NwslDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
