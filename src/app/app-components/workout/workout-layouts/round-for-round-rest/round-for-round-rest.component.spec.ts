import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundForRoundRestComponent } from './round-for-round-rest.component';

describe('RoundForRoundRestComponent', () => {
  let component: RoundForRoundRestComponent;
  let fixture: ComponentFixture<RoundForRoundRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundForRoundRestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundForRoundRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
