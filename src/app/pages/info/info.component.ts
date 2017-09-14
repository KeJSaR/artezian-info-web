import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  template: `
    <app-header></app-header>
    <p>
      info Works!
    </p>
    <app-footer></app-footer>
  `,
  styles: []
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
