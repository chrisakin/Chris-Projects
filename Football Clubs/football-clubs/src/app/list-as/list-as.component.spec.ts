import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAsComponent } from './list-as.component';

describe('ListAsComponent', () => {
  let component: ListAsComponent;
  let fixture: ComponentFixture<ListAsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
