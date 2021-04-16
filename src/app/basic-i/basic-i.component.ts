import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Profile } from '../Models/Profile.model';
import { getAge, getDomaineEmail, getIdentifiantEmail } from '../Services/methodeStatic';
import { ProfileService } from '../Services/Profile.service';

@Component({
  selector: 'app-basic-i',
  templateUrl: './basic-i.component.html',
  styleUrls: ['./basic-i.component.scss']
})
export class BasicIComponent implements OnInit {

  profile: Profile[];
  profileSubscription: Subscription;
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileSubscription = this.profileService.profileSubject.subscribe(
      profile => this.profile = profile
    );
    this.profileService.emitProfile();
  }

  getAgeStatic(dateNaissace: Date): number {
    return getAge(dateNaissace);
  }

  getDomaineEmailStatic(adrEmail: string): string {
    return getDomaineEmail(adrEmail);
  }

  getIdentifiantEmailStatic(adrEmail: string): string {
    return getIdentifiantEmail(adrEmail);
  }
}
