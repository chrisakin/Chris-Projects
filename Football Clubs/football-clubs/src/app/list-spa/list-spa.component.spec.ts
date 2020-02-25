import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSpaComponent } from './list-spa.component';

describe('ListSpaComponent', () => {
  let component: ListSpaComponent;
  let fixture: ComponentFixture<ListSpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
