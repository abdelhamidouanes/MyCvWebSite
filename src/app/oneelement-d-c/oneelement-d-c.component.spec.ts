import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneelementDCComponent } from './oneelement-d-c.component';

describe('OneelementDCComponent', () => {
  let component: OneelementDCComponent;
  let fixture: ComponentFixture<OneelementDCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneelementDCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneelementDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
