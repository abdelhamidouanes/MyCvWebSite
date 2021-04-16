import { Langue } from './Langue.model';
import { SocialMedia } from './SocialMedia.model';
export class Profile{
    constructor(public nom: string,
                public prenom: string,
                public jobTitle: string,
                public email: string,
                public dateNaissace: Date,
                public aProposIntro: string,
                public aProposDetail: string,
                public tel: string,
                public adr: string,
                public adrVille: string,
                public adrPays: string,
                public socialMedia: SocialMedia[],
                public langues: Langue[]
    ) {
    }
}
