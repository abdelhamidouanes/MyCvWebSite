import { ThemePreferences } from './../Models/ThemePreferences.model';
import { ThemePreferencesService } from '../Services/themePreferences.service';
import { Subscription } from 'rxjs';
import { BgService } from './../Services/bg.service';
import { imgFolderSlide } from './../Services/constantes.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

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
    this.imgFolderSlide = imgFolderSlide;

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

  getFileName(fileName: string): string{
    return fileName.split('.').slice(0, -1).join('.');
  }

}
