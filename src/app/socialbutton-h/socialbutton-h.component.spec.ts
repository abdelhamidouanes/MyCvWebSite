import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialbuttonHComponent } from './socialbutton-h.component';

describe('SocialbuttonHComponent', () => {
  let component: SocialbuttonHComponent;
  let fixture: ComponentFixture<SocialbuttonHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialbuttonHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialbuttonHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
