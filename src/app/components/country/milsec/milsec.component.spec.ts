import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilsecComponent } from './milsec.component';

describe('MilsecComponent', () => {
  let component: MilsecComponent;
  let fixture: ComponentFixture<MilsecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilsecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilsecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
