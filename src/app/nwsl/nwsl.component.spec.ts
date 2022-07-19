import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwslComponent } from './nwsl.component';

describe('NwslComponent', () => {
  let component: NwslComponent;
  let fixture: ComponentFixture<NwslComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwslComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NwslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
