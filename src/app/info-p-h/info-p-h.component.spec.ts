import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPHComponent } from './info-p-h.component';

describe('InfoPHComponent', () => {
  let component: InfoPHComponent;
  let fixture: ComponentFixture<InfoPHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
