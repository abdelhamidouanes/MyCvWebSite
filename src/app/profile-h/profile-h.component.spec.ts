import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHComponent } from './profile-h.component';

describe('ProfileHComponent', () => {
  let component: ProfileHComponent;
  let fixture: ComponentFixture<ProfileHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
