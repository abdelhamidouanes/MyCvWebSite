import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCComponent } from './detail-c.component';

describe('DetailCComponent', () => {
  let component: DetailCComponent;
  let fixture: ComponentFixture<DetailCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
