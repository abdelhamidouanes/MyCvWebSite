import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediaFComponent } from './socialmedia-f.component';

describe('SocialmediaFComponent', () => {
  let component: SocialmediaFComponent;
  let fixture: ComponentFixture<SocialmediaFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialmediaFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialmediaFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
