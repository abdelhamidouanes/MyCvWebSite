import { ThemePreferences } from '../Models/ThemePreferences.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ThemePreferencesService{
    private preferences: ThemePreferences[];
    preferencesSubject = new Subject<ThemePreferences[]>();

    constructor() {
        this.preferences = [
            { bgimage: '1.jpg' },
            { bgimage: '2.jpg' },
            { bgimage: '3.jpg' },
            { bgimage: '4.jpg' }
        ];
     }

    emitPreferences(): void{
        this.preferencesSubject.next(this.preferences.slice());
    }
}
