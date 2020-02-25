import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItaComponent } from './list-ita.component';

describe('ListItaComponent', () => {
  let component: ListItaComponent;
  let fixture: ComponentFixture<ListItaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListItaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
