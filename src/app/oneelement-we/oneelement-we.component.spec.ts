import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneelementWEComponent } from './oneelement-we.component';

describe('OneelementWEComponent', () => {
  let component: OneelementWEComponent;
  let fixture: ComponentFixture<OneelementWEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneelementWEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneelementWEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
