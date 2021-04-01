import { AfficheMenuService } from './../Services/afficheMenu.service';
import { imgFolder } from './../Services/constantes.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-info-p-h',
  templateUrl: './info-p-h.component.html',
  styleUrls: ['./info-p-h.component.scss']
})
export class InfoPHComponent implements OnInit {

  imgFolder: string;

  afficheMenu: string;
  afficheMenuSubscription: Subscription;

  constructor(private afficheMenuService: AfficheMenuService) { }

  ngOnInit(): void {
    this.imgFolder = imgFolder;

    this.afficheMenuSubscription = this.afficheMenuService.afficheMenuSubject.subscribe(
      afficheMenu => this.afficheMenu = afficheMenu
    );
    this.afficheMenuService.emitAfficheMenu();
  }

}
