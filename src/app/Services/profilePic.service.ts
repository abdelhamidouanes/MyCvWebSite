import { ProfilePic } from './../Models/ProfilePic.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ProfilePicService{
    private profilePictures: ProfilePic[];
    profilePicturesSubject = new Subject<ProfilePic[]>();

    constructor() {
        this.profilePictures = [
            { profileImg: '1.jpg' },
            { profileImg: '2.jpg' },
            { profileImg: '3.jpg' },
            { profileImg: '4.jpg' }
        ];
     }

    emitProfilePictures(): void{
        this.profilePicturesSubject.next(this.profilePictures.slice());
    }
}
