import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  template: `
    <p>
      article Works!
    </p>
  `,
  styles: []
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
