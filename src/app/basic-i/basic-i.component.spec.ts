import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicIComponent } from './basic-i.component';

describe('BasicIComponent', () => {
  let component: BasicIComponent;
  let fixture: ComponentFixture<BasicIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
