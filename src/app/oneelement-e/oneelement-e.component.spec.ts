import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneelementEComponent } from './oneelement-e.component';

describe('OneelementEComponent', () => {
  let component: OneelementEComponent;
  let fixture: ComponentFixture<OneelementEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneelementEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneelementEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
