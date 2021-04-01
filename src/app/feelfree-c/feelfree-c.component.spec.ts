import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelfreeCComponent } from './feelfree-c.component';

describe('FeelfreeCComponent', () => {
  let component: FeelfreeCComponent;
  let fixture: ComponentFixture<FeelfreeCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeelfreeCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeelfreeCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
