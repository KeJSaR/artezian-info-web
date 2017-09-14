import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  template: `
    <app-header></app-header>
    <p>
      article Works!
    </p>
    <p>
      The article is {{link}}
    </p>
    <app-article-content></app-article-content>
    <app-footer></app-footer>
  `,
  styles: []
})
export class ArticleComponent implements OnInit {

  link:string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.link = this.route.snapshot.params['id'];
    console.log(this.link);
  }

}
