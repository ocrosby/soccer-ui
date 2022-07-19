import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaComponent } from './ga.component';

describe('GaComponent', () => {
  let component: GaComponent;
  let fixture: ComponentFixture<GaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
