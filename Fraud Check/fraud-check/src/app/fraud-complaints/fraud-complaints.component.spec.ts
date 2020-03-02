import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudComplaintsComponent } from './fraud-complaints.component';

describe('FraudComplaintsComponent', () => {
  let component: FraudComplaintsComponent;
  let fixture: ComponentFixture<FraudComplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraudComplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraudComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
