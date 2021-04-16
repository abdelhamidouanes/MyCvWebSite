import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AfficheMenuService } from '../Services/afficheMenu.service';

@Component({
  selector: 'app-nav2-h',
  templateUrl: './nav2-h.component.html',
  styleUrls: ['./nav2-h.component.scss']
})
export class Nav2HComponent implements OnInit {

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

  afficheCacherMenu(): void {
    if (this.afficheMenu === 'true') {
      this.afficheMenuService.changeAfficheMenu('false');
    } else {
      this.afficheMenuService.changeAfficheMenu('true');
    }
  }
}
