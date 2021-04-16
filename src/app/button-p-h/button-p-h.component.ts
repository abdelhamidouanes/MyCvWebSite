import { cvFolder } from './../Services/constantes';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Profile } from '../Models/Profile.model';
import { ProfileService } from '../Services/Profile.service';

@Component({
  selector: 'app-button-p-h',
  templateUrl: './button-p-h.component.html',
  styleUrls: ['./button-p-h.component.scss']
})
export class ButtonPHComponent implements OnInit {

  cvFolder: string;

  profile: Profile[];
  profileSubscription: Subscription;
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.cvFolder = cvFolder;

    this.profileSubscription = this.profileService.profileSubject.subscribe(
      profile => this.profile = profile
    );
    this.profileService.emitProfile();
  }

}
