import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Competence } from '../Models/Competence.model';

@Injectable()
export class CompetenceService{
    private competences: Competence[];
    competencesSubject = new Subject<Competence[]>();

    constructor() {
        this.competences = [
            { titre: 'Langages',
              pourcentage: 80,
              description: 'Javascript, Typescript, java, PL/SQL, PHP , C, Cobol, HTML5, CSS3, SQL'},
            { titre: 'Framework',
              pourcentage: 70,
              description: 'Angular, Spring, Spring Boot, Hibernate, JPA' },
            { titre: 'Base de données',
              pourcentage: 85,
              description: 'My Sql, Oracle,MangoDBL' },
            { titre: 'Outils',
              pourcentage: 90,
              description: 'Maven, Git, GitHub, Postman, jira, easyvista'},
            { titre: 'Conception et modélisation',
              pourcentage: 75,
              description: 'UML ,merise, MVC, MSA, SOA, 3-tiers, DAO' },
            { titre: 'Bureautique et infographie',
              pourcentage: 65,
              description: 'Photoshop, Illustrator, Lightroom, Word, Excel, PowerPoint, Latex' }
        ];
     }

    emitCompetences(): void{
        this.competencesSubject.next(this.competences.slice());
    }
}
