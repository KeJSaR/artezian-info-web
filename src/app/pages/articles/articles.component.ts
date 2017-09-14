import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  template: `
    <app-header></app-header>
    <p>
      articles Works!
    </p>
    <app-articles-list></app-articles-list>
    <app-footer></app-footer>
  `,
  styles: []
})
export class ArticlesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
