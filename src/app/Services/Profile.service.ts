import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Profile } from '../Models/Profile.model';

@Injectable()
export class ProfileService{
    private profile: Profile[];
    profileSubject = new Subject<Profile[]>();

    constructor() {
        this.profile = [{
            nom: 'Ouanes',
            prenom: 'Abdelhamid',
            jobTitle: 'Développeur full stack, Consultant informatique, Développeur logiciel',
            email: 'abdelhamid.ouanes.mail@gmail.com',
            dateNaissace: new Date(1990, 6, 28),
            aProposIntro: 'Bonjour! Je suis Abdelhamid Ouanes développeur full stack, consultant informatique et développeur logiciel',
            aProposDetail: 'Développeur informatique de formation, personne ouvert d’esprit, enthousiaste et soucieux de se perfectionner. Passionné par le développement web, j’ai développer une bonne capacité d’adaptation et d’apprentissage.',
            tel: '+216 25 25 12 95',
            adr: '29 rue andalous 1008 Bab mnara',
            adrVille: 'Tunis',
            adrPays: 'Tunisie',
            socialMedia: [{ socialMedia: 'fb', link: 'https://www.facebook.com/abdelhamid.ouanes.1/' },
                          { socialMedia: 'linkin', link: 'https://www.linkedin.com/in/abdelhamid-ouanes-128093159/'},
                          { socialMedia: 'insta', link: 'https://www.instagram.com/abdelhamidouanes/'},
                          { socialMedia: 'github', link: 'https://github.com/abdelhamidouanes'}],
            langues: [{langue: 'Arabe', niveau: '100', description: ''},
                      {langue: 'Français', niveau: '70', description: ''},
                      {langue: 'Anglais', niveau: '45', description: ''}]
        }];
     }

    emitProfile(): void{
        this.profileSubject.next(this.profile.slice());
    }
}
