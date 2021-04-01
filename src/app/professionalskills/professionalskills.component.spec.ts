import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalskillsComponent } from './professionalskills.component';

describe('ProfessionalskillsComponent', () => {
  let component: ProfessionalskillsComponent;
  let fixture: ComponentFixture<ProfessionalskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalskillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
