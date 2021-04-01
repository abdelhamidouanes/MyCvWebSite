import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIComponent } from './about-i.component';

describe('AboutIComponent', () => {
  let component: AboutIComponent;
  let fixture: ComponentFixture<AboutIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
