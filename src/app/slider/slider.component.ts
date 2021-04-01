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

  slides = [
    { img: '1.jpg' },
    { img: '2.jpg' },
    { img: '3.jpg' },
    { img: '4.jpg' }
  ];

  constructor(private bgService: BgService) { }

  ngOnInit(): void {
    this.imgFolderSlide = imgFolderSlide;

    this.activeThemeSubscription = this.bgService.activeThemeSubject.subscribe(
      activeTheme => this.activeTheme = activeTheme
    );
    this.bgService.emitActriveTheme();
  }

  ngOnDestroy(): void {
    this.activeThemeSubscription.unsubscribe();
  }

  getFileName(fileName: string): string{
    return fileName.split('.').slice(0, -1).join('.');
  }

}
