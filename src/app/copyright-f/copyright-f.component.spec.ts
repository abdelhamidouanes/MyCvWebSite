import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyrightFComponent } from './copyright-f.component';

describe('CopyrightFComponent', () => {
  let component: CopyrightFComponent;
  let fixture: ComponentFixture<CopyrightFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyrightFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyrightFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
