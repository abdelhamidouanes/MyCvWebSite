import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHComponent } from './nav-h.component';

describe('NavHComponent', () => {
  let component: NavHComponent;
  let fixture: ComponentFixture<NavHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
