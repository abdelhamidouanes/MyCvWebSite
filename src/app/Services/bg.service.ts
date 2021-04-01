import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class BgService{

    private themeLength: number;
    private activeTheme: string;
    private previousClicked: string;
    private nextClicked: string;
    activeThemeSubject = new Subject<string>();
    previousClickedSubject = new Subject<string>();
    nextClickedSubject = new Subject<string>();

    constructor() {
        this.activeTheme = '1';
        this.themeLength = 4;
        this.nextClicked = 'false';
        this.previousClicked = 'false';
    }

    emitActriveTheme(): void {
        this.activeThemeSubject.next(this.activeTheme.slice());
    }

    emitPreviousClicked(): void{
        this.previousClickedSubject.next(this.previousClicked.slice());
    }

    emitNextClicked(): void{
        this.nextClickedSubject.next(this.nextClicked.slice());
    }

    nextTheme(): void{
        const activNum = Number(this.activeTheme);
        if (activNum === this.themeLength) {
            this.activeTheme = '1';
            this.emitActriveTheme();
        } else {
            this.activeTheme = '' + (activNum + 1);
            this.emitActriveTheme();
        }
    }

    previeusTheme(): void{
        const activNum = Number(this.activeTheme);
        if (activNum === 1) {
            this.activeTheme = '' + this.themeLength;
            this.emitActriveTheme();
        }else{
            this.activeTheme = '' + (activNum - 1);
            this.emitActriveTheme();
        }
    }

    nextToClicked(): void{
        this.nextClicked = 'true';
        this.emitNextClicked();
    }

    nextToUnClicked(): void{
        this.nextClicked = 'false';
        this.emitNextClicked();
    }

    previeusToClicked(): void{
        this.previousClicked = 'true';
        this.emitPreviousClicked();
    }

    previeusToUnClicked(): void{
        this.previousClicked = 'false';
        this.emitPreviousClicked();
    }
}
