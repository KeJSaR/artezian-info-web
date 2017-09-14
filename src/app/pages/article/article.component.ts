import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  template: `
    <app-header></app-header>
    <p>
      article Works!
    </p>
    <app-article-content></app-article-content>
    <app-footer></app-footer>
  `,
  styles: []
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
