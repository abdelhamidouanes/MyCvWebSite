import { Subscription } from 'rxjs';
import { CompetenceService } from './../Services/competence.service';
import { Component, OnInit } from '@angular/core';
import { Competence } from '../Models/Competence.model';
import { getLength } from '../Services/methodeStatic';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss'],
})
export class CompetenceComponent implements OnInit {
  competences: Competence[];
  competencesSubscription: Subscription;

  constructor(private competenceService: CompetenceService) {}

  ngOnInit(): void {
    this.competencesSubscription = this.competenceService.competencesSubject.subscribe(
      (competences) => (this.competences = competences)
    );
    this.competenceService.emitCompetences();
  }

  getLengthStatic(array: any[]): number {
    return getLength(array);
  }
}
