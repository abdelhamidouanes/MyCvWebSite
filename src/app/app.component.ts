import { AfficheMenuService } from './Services/afficheMenu.service';
import { BgService } from './Services/bg.service';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  afficheMenu: string;
  afficheMenuSubscription: Subscription;


  nextClicked: string;
  previousClicked: string;
  nextClickedSubscription: Subscription;
  previousClickedSubscription: Subscription;


  timeToChangeTheme = 5000;

  activeTheme: string;
  activeThemeSubscription: Subscription;

  ngOnInit(): void {
    this.afficheMenuSubscription = this.afficheMenuService.afficheMenuSubject.subscribe(
      afficheMenu => this.afficheMenu = afficheMenu
    );
    this.afficheMenuService.emitAfficheMenu();

    this.activeThemeSubscription = this.bgService.activeThemeSubject.subscribe(
      activeTheme => this.activeTheme = activeTheme
    );
    this.bgService.emitActriveTheme();

    this.nextClickedSubscription = this.bgService.nextClickedSubject.subscribe(
      nextClicked => this.nextClicked = nextClicked
    );
    this.bgService.emitNextClicked();

    this.previousClickedSubscription = this.bgService.previousClickedSubject.subscribe(
      previousClicked => this.previousClicked = previousClicked
    );
    this.bgService.emitPreviousClicked();

  }

  ngOnDestroy(): void {
    this.afficheMenuSubscription.unsubscribe();
    this.activeThemeSubscription.unsubscribe();
  }

  constructor(private bgService: BgService, private afficheMenuService: AfficheMenuService) {
    this.changeTheme();
  }

  changeTheme(): void {
    let index = 1;
    setInterval(() => {
      // Si next ou previeus est clicker et c'est le dernier tour de la boucle
        if (this.nextClicked === 'true' && index === (this.timeToChangeTheme / 10)) {
          this.bgService.nextTheme();
          this.bgService.nextToUnClicked();
          this.timeToChangeTheme += 1000;
          index = 1;
        } else if (this.previousClicked === 'true' && index === (this.timeToChangeTheme / 10)) {
          this.bgService.previeusTheme();
          this.bgService.previeusToUnClicked();
          this.timeToChangeTheme += 1000;
          index = 1;
        }
        // si c'est le dernier tour de la boucle
        else if (index === (this.timeToChangeTheme / 10)) {
          this.bgService.nextTheme();
          this.timeToChangeTheme += 1000;
          index = 1;
        }
        // si previeus clicker
        else if (this.previousClicked === 'true') {
          this.bgService.previeusTheme();
          this.bgService.previeusToUnClicked();
          index = 1;
        }
        // si next clicker
        else if (this.nextClicked === 'true') {
          this.bgService.nextTheme();
          this.bgService.nextToUnClicked();
          index = 1;
        }
        index++;
    }, 10);
  }

}
