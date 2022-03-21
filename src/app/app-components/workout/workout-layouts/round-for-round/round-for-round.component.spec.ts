import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundForRoundComponent } from './round-for-round.component';

describe('RoundForRoundComponent', () => {
  let component: RoundForRoundComponent;
  let fixture: ComponentFixture<RoundForRoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundForRoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundForRoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
