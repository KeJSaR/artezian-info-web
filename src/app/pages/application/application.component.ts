import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  template: `
    <app-header></app-header>
    <p>
      application Works!
    </p>
    <app-footer></app-footer>
  `,
  styles: []
})
export class ApplicationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
