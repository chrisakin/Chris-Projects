import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudstersReportedComponent } from './fraudsters-reported.component';

describe('FraudstersReportedComponent', () => {
  let component: FraudstersReportedComponent;
  let fixture: ComponentFixture<FraudstersReportedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraudstersReportedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraudstersReportedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
