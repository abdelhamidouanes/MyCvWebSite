import { ProfessionalSkillsService } from './../Services/professionalSkills.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Professionalskills } from '../Models/ProfessionalSkills.model';
import { getMonth } from '../Services/methodeStatic';


@Component({
  selector: 'app-professionalskills',
  templateUrl: './professionalskills.component.html',
  styleUrls: ['./professionalskills.component.scss']
})
export class ProfessionalskillsComponent implements OnInit, OnDestroy {

  experiencePro: Professionalskills[];
  experienceProSubscription: Subscription;

  constructor(private professionalSkillsService: ProfessionalSkillsService) { }

  ngOnInit(): void {
    this.experienceProSubscription = this.professionalSkillsService.experienceProSubject.subscribe(
      experiencePro => this.experiencePro = experiencePro
    );
    this.professionalSkillsService.emitExperiencePro();
  }

  ngOnDestroy(): void {
    this.experienceProSubscription.unsubscribe();
  }

  getMonthStatic(mois: number, type: string): string{
    return getMonth(mois, type);
  }

}
