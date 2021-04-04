import { ProfessionalSkillsService } from './../Services/professionalSkills.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Professionalskills } from '../Models/ProfessionalSkills.model';

@Component({
  selector: 'app-professionalskills',
  templateUrl: './professionalskills.component.html',
  styleUrls: ['./professionalskills.component.scss']
})
export class ProfessionalskillsComponent implements OnInit {

  experiencePro: Professionalskills[];
  experienceProSubscription: Subscription;

  constructor(private professionalSkillsService: ProfessionalSkillsService) { }

  ngOnInit(): void {
    this.experienceProSubscription = this.professionalSkillsService.experienceProSubject.subscribe(
      experiencePro => this.experiencePro = experiencePro
    );
    this.professionalSkillsService.emitExperiencePro();
    console.log(this.experiencePro);
  }

}
