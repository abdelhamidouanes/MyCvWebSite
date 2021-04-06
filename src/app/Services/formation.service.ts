import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Formation } from '../Models/Formation.model';

@Injectable()
export class FormationService{
    private formations: Formation[];
    formationsSubject = new Subject<Formation[]>();

    constructor() {
        this.formations = [
            {diplome: 'Formation en ligne',
             dateDebutY: 2020,
             dateDebutM: 0,
             dateFinY: 2020,
             dateFinM: 0,
             specialite: 'Développement Web full-stack',
             description: 'Compétences acquises : html5, css3, javascript, typescript, angular 10, spring, spring boot, jpa, api, hibernate, msa, NoSQL',
             ecole: 'Openclassrooms',
             ecoleType: 'Plateforme'},
            {diplome: 'Diplôme Master de recherche',
             dateDebutY: 2014,
             dateDebutM: 0,
             dateFinY: 2016,
             dateFinM: 0,
             specialite: 'Fouilles de données et gestion des connaissances',
             description: 'Spécialité Extraction des connaissances à partir des données',
             ecole: 'École polytechnique de l’université de Nantes',
             ecoleType: 'Université'},
            {diplome: 'Diplôme Master de recherche',
             dateDebutY: 2013,
             dateDebutM: 0,
             dateFinY: 2015,
             dateFinM: 0,
             specialite: 'Sciences et Techniques de l’Informatique Décisionnelle',
             description: 'Spécialité Informatique et gestion des connaissances',
             ecole: 'Institut Supérieur de Gestion de Tunis',
             ecoleType: 'Université'},
            {diplome: 'Diplôme Licence fondamental',
             dateDebutY: 2009,
             dateDebutM: 0,
             dateFinY: 2012,
             dateFinM: 0,
             specialite: 'Informatique de gestion',
             description: 'Stage de fin d’études à Attijari Bank : Développement et implémentation d’une application android Multi-service Front et back office.',
             ecole: 'Institut Supérieur de Gestion de Tunis',
             ecoleType: 'Université'},
             {diplome: 'Diplôme baccalauréat',
             dateDebutY: 2009,
             dateDebutM: 0,
             dateFinY: 2009,
             dateFinM: 0,
             specialite: 'Spécialité Informatique',
             description: '',
             ecole: '9 avril 1938',
             ecoleType: 'Lycée'}
        ];
     }

    emitFormations(): void{
        this.formationsSubject.next(this.formations.slice());
    }
}
