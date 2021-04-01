import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneelementPSComponent } from './oneelement-ps.component';

describe('OneelementPSComponent', () => {
  let component: OneelementPSComponent;
  let fixture: ComponentFixture<OneelementPSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneelementPSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneelementPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
