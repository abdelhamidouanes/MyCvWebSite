import { ThemePreferences } from './../Models/ThemePreferences.model';
import { ThemePreferencesService } from '../Services/themePreferences.service';
import { Subscription } from 'rxjs';
import { BgService } from './../Services/bg.service';
import { imgFolderBG } from '../Services/constantes';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { getFileName } from '../Services/methodeStatic';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, OnDestroy {

  imgFolderSlide: string;

  activeTheme: string;
  activeThemeSubscription: Subscription;

  preferences: ThemePreferences[];
  preferencesSubscription: Subscription;

  constructor(private bgService: BgService, private themePreferencesService: ThemePreferencesService) { }

  ngOnInit(): void {
    this.imgFolderSlide = imgFolderBG;

    this.activeThemeSubscription = this.bgService.activeThemeSubject.subscribe(
      activeTheme => this.activeTheme = activeTheme
    );
    this.bgService.emitActriveTheme();

    this.preferencesSubscription = this.themePreferencesService.preferencesSubject.subscribe(
      preferences => this.preferences = preferences
    );
    this.themePreferencesService.emitPreferences();
  }

  ngOnDestroy(): void {
    this.activeThemeSubscription.unsubscribe();
  }

  getFileNameStatic(fileName: string): string{
    return getFileName(fileName);
  }

}
