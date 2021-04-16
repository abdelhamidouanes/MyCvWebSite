import { BgService } from './../Services/bg.service';
import { ProfilePicService } from './../Services/profilePic.service';
import { AfficheMenuService } from './../Services/afficheMenu.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { imgFolderProfilePic } from '../Services/constantes';
import { ProfilePic } from '../Models/ProfilePic.model';
import { getFileName } from '../Services/methodeStatic';
import { Profile } from '../Models/Profile.model';
import { ProfileService } from '../Services/Profile.service';

@Component({
  selector: 'app-info-p-h',
  templateUrl: './info-p-h.component.html',
  styleUrls: ['./info-p-h.component.scss']
})
export class InfoPHComponent implements OnInit {

  imgFolderProfilePic: string;

  activeTheme: string;
  activeThemeSubscription: Subscription;

  afficheMenu: string;
  afficheMenuSubscription: Subscription;

  profilePictures: ProfilePic[];
  profilePicturesSubscription: Subscription;

  profile: Profile[];
  profileSubscription: Subscription;

  constructor(private afficheMenuService: AfficheMenuService,
              private profilePicService: ProfilePicService,
              private bgService: BgService,
              private profileService: ProfileService) { }

  ngOnInit(): void {
    this.imgFolderProfilePic = imgFolderProfilePic;

    this.afficheMenuSubscription = this.afficheMenuService.afficheMenuSubject.subscribe(
      afficheMenu => this.afficheMenu = afficheMenu
    );
    this.afficheMenuService.emitAfficheMenu();

    this.profilePicturesSubscription = this.profilePicService.profilePicturesSubject.subscribe(
      profilePictures => this.profilePictures = profilePictures
    );
    this.profilePicService.emitProfilePictures();

    this.activeThemeSubscription = this.bgService.activeThemeSubject.subscribe(
      activeTheme => this.activeTheme = activeTheme
    );
    this.bgService.emitActriveTheme();

    this.profileSubscription = this.profileService.profileSubject.subscribe(
      profile => this.profile = profile
    );
    this.profileService.emitProfile();
  }

  getFileNameStatic(fileName: string): string{
    return getFileName(fileName);
  }
}
