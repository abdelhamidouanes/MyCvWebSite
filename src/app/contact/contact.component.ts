import { Component, OnInit } from '@angular/core';
import { imgFolderBG } from '../Services/constantes';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  imgFolderBG: string;
  inputSelected: boolean[] = new Array(3);

  constructor() { 
    for (let index = 0; index < 3; index++) {
      this.inputSelected[index] = false;
    }
  }

  ngOnInit(): void {
    this.imgFolderBG = imgFolderBG;
  }

  onFocus(i: number): void{
    this.inputSelected[i] = true;
  }

  onBlur(i: number): void{
    this.inputSelected[i] = false;
  }

  getInputSelected(i: string): boolean{
    return this.inputSelected[Number(i)];
  }

}
