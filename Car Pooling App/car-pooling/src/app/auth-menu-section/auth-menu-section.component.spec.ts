import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthMenuSectionComponent } from './auth-menu-section.component';

describe('AuthMenuSectionComponent', () => {
  let component: AuthMenuSectionComponent;
  let fixture: ComponentFixture<AuthMenuSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthMenuSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthMenuSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
