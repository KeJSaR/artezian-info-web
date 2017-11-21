import { Component } from '@angular/core';

@Component({
  selector: 'aae-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {

  height: string;

  constructor() {
    this.height = (window.innerHeight - 120).toString() + 'px';
  }

}
