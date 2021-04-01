import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nav2HComponent } from './nav2-h.component';

describe('Nav2HComponent', () => {
  let component: Nav2HComponent;
  let fixture: ComponentFixture<Nav2HComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nav2HComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nav2HComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
