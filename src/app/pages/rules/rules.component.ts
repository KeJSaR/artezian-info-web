import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  template: `
    <app-header></app-header>
    <p>
      rules Works!
    </p>
    <app-footer></app-footer>
  `,
  styles: []
})
export class RulesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
