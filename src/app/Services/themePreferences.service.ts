import { ThemePreferences } from '../Models/ThemePreferences.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ThemePreferencesService{
    private preferences: ThemePreferences[];
    preferencesSubject = new Subject<ThemePreferences[]>();

    constructor() {
        this.preferences = [
            { bgImage: '1.jpg' },
            { bgImage: '2.jpg' },
            { bgImage: '3.jpg' },
            { bgImage: '4.jpg' }
        ];
     }

    emitPreferences(): void{
        this.preferencesSubject.next(this.preferences.slice());
    }
}
