import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEuComponent } from './list-eu.component';

describe('ListEuComponent', () => {
  let component: ListEuComponent;
  let fixture: ComponentFixture<ListEuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
