import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Profile } from '../Models/Profile.model';
import { imgFolderBG } from '../Services/constantes';
import { ProfileService } from '../Services/Profile.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  imgFolderBG: string;
  inputSelected: boolean[] = new Array(3);

  profile: Profile[];
  profileSubscription: Subscription;
  constructor(private profileService: ProfileService) {
    for (let index = 0; index < 3; index++) {
      this.inputSelected[index] = false;
    }
  }

  ngOnInit(): void {
    this.imgFolderBG = imgFolderBG;

    this.profileSubscription = this.profileService.profileSubject.subscribe(
      profile => this.profile = profile
    );
    this.profileService.emitProfile();
  }

  onFocus(i: number): void{
    this.inputSelected[i] = true;
  }

  onBlur(i: number): void{
    this.inputSelected[i] = false;
  }

  getInputSelected(i: string): boolean{
    return this.inputSelected[Number(i)];
  }

}
