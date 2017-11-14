import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {
  
  height: string;

  constructor() {
    this.height = (window.innerHeight - 120).toString() + 'px';
  }

}
