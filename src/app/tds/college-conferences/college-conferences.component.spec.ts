import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeConferencesComponent } from './college-conferences.component';

describe('CollegeConferencesComponent', () => {
  let component: CollegeConferencesComponent;
  let fixture: ComponentFixture<CollegeConferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegeConferencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollegeConferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
