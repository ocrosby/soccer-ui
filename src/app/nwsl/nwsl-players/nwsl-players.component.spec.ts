import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NwslPlayersComponent } from './nwsl-players.component';

describe('NwslPlayersComponent', () => {
  let component: NwslPlayersComponent;
  let fixture: ComponentFixture<NwslPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NwslPlayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NwslPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
