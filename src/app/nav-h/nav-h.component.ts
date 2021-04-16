import { AfficheMenuService } from './../Services/afficheMenu.service';
import { Component, EventEmitter, HostListener, OnInit, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav-h',
  templateUrl: './nav-h.component.html',
  styleUrls: ['./nav-h.component.scss']
})
export class NavHComponent implements OnInit, OnDestroy {

  afficheMenu: string;
  afficheMenuSubscription: Subscription;

  @Output() scrollTo = new EventEmitter();

  constructor(private afficheMenuService: AfficheMenuService) { }

  ngOnInit(): void {
    this.afficheMenuSubscription = this.afficheMenuService.afficheMenuSubject.subscribe(
      afficheMenu => this.afficheMenu = afficheMenu
    );
    this.afficheMenuService.emitAfficheMenu();
  }

  ngOnDestroy(): void {
    this.afficheMenuSubscription.unsubscribe();
  }

  afficheCacherMenu(): void {
    if (this.afficheMenu === 'true') {
      this.afficheMenuService.changeAfficheMenu('false');
    } else {
      this.afficheMenuService.changeAfficheMenu('true');
    }
  }

  cacherMenu(): void{
    if (this.afficheMenu === 'true') {
      this.afficheCacherMenu();
    }
  }

  @HostListener('window:resize', ['$event'])
    onResize(event): void {
        if (window.innerWidth > 600) {
            this.afficheMenuService.changeAfficheMenu('false');
        }
    }

}
