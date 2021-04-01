import { HostListener, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AfficheMenuService{

    private afficheMenu = 'false';

    afficheMenuSubject = new Subject<string>();

    constructor() {
    }

    emitAfficheMenu(): void {
        this.afficheMenuSubject.next(this.afficheMenu.slice());
    }

    changeAfficheMenu(state: string): void {
        this.afficheMenu = state;
        this.emitAfficheMenu();
    }
}
