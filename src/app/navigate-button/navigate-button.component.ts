import { BgService } from './../Services/bg.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigate-button',
  templateUrl: './navigate-button.component.html',
  styleUrls: ['./navigate-button.component.scss']
})
export class NavigateButtonComponent implements OnInit {

  constructor(private bgService: BgService) { }

  ngOnInit(): void {
  }

  onClickNext(): void{
    this.bgService.nextToClicked();
  }
  onClickPrevieus(): void{
    this.bgService.previeusToClicked();
  }
}
