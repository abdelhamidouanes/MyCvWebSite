import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Professionalskills } from '../Models/ProfessionalSkills.model';

@Injectable()
export class ProfessionalSkillsService{
    private experiencePro: Professionalskills[];
    experienceProSubject = new Subject<Professionalskills[]>();

    constructor() {
        this.experiencePro = [
            { emploiyeur: 'Audaxis Maghreb',
              dateDebutY: 2019,
              dateDebutM: 5,
              dateFinY: 2020,
              dateFinM: 6,
              jobTitle: 'Développeur Java EE',
              jobDetail: ['Analyse et correction des anomalies sur le système d’information Compiere.',
                          'Analyse, etude d’impact et conception des nouvelles besoins clients.',
                          'Développer les différents corrections et évolutions.',
                          'Imputation des données en masse.'] },
            { emploiyeur: 'Sopra hr software',
              dateDebutY: 2017,
              dateDebutM: 7,
              dateFinY: 2019,
              dateFinM: 4,
              jobTitle: 'Consultant SIRH',
              jobDetail: ['Développement et modification des traitements Cobol.',
                          'Optimisation du paramétrage et paramétrage des nouvelles rubriques de paie pour les nouvelles sociétés.',
                          'Analyse et correction des différents déclarations, événmentiel, mensuel et annuel.',
                          'Etude d’impact et installation des patchs.']  },
            { emploiyeur: 'Laboratoire SOIE, ISG Tunis',
              dateDebutY: 2016,
              dateDebutM: 10,
              dateFinY: 2017,
              dateFinM: 7,
              jobTitle: 'Doctorant',
              jobDetail: ['Publication nommée « A Hybrid Approach for Sleep Stages Classification » publiée dans laconférence « GECCO 16 Proceedings of the Genetic and Evolutionary Computation Conference 2016» Denver, Colorado, USA 2016',
                          'Enseignant vacataire à ISG Tunis : TP et TD Algorithme et structure des données (ASD).',
                          'Élaboration de la problématique, les aspects d’étude et les axes de recherche.']   },
            { emploiyeur: 'GTI filiale d’Attijari Bank',
              dateDebutY: 2012,
              dateDebutM: 5,
              dateFinY: 2013,
              dateFinM: 7,
              jobTitle: 'Analyste développeur',
              jobDetail: ['L’interrogation des différentes bases de données pour assurer le reporting.',
                          'Développement et implémentation d’une interface de vente des packs.',
                          'Encadrement du projet fin d’études Application CRM Android.',
                          'Interfacage de données entre les deux plateformes Attijari net et Attijari Real-Time.']   },
            { emploiyeur: 'Attijari Bank',
              dateDebutY: 2012,
              dateDebutM: 2,
              dateFinY: 2012,
              dateFinM: 6,
              jobTitle: 'Stagiaire : projet de fin d’études',
              jobDetail: ['Conception et Développement d’une application mobile Android qui permet aux utilisateurs de consulter et gérer leurs comptes.',
                          'Un back-office en PHP a été créé pour la gestion des comptes et des clients.']   }
        ];
     }

    emitExperiencePro(): void{
        this.experienceProSubject.next(this.experiencePro.slice());
    }
}
