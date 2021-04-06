import { Subscription } from 'rxjs';
import { FormationService } from './../Services/formation.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Formation } from '../Models/Formation.model';
import { getMonth } from '../Services/methodeStatic';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit, OnDestroy {

  formations: Formation[];
  formationsSubscription: Subscription;


  constructor(private formationService: FormationService) { }

  ngOnInit(): void {
    this.formationsSubscription = this.formationService.formationsSubject.subscribe(
      formations => this.formations = formations
    );
    this.formationService.emitFormations();
  }

  ngOnDestroy(): void {
    this.formationsSubscription.unsubscribe();
  }

  getMonthStatic(mois: number, type: string): string{
    return getMonth(mois, type);
  }

}
