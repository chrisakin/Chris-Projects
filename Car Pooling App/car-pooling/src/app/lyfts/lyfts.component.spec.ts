import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LyftsComponent } from './lyfts.component';

describe('LyftsComponent', () => {
  let component: LyftsComponent;
  let fixture: ComponentFixture<LyftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
