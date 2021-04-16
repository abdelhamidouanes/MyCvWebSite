import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Profile } from '../Models/Profile.model';
import { ProfileService } from '../Services/Profile.service';

@Component({
  selector: 'app-socialbutton-h',
  templateUrl: './socialbutton-h.component.html',
  styleUrls: ['./socialbutton-h.component.scss']
})
export class SocialbuttonHComponent implements OnInit {

  profile: Profile[];
  profileSubscription: Subscription;
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileSubscription = this.profileService.profileSubject.subscribe(
      profile => this.profile = profile
    );
    this.profileService.emitProfile();
  }

}
