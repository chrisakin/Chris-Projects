import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAfComponent } from './list-af.component';

describe('ListAfComponent', () => {
  let component: ListAfComponent;
  let fixture: ComponentFixture<ListAfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
