import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPHComponent } from './button-p-h.component';

describe('ButtonPHComponent', () => {
  let component: ButtonPHComponent;
  let fixture: ComponentFixture<ButtonPHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonPHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
