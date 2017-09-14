import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  template: `
    <p>
      intro Works!
    </p>
    <app-header></app-header>
  `,
  styles: []
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
