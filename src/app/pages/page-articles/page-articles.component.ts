import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

@Component({
  selector: 'app-page-articles',
  templateUrl: './page-articles.component.html',
  styleUrls: ['./page-articles.component.sass']
})
export class PageArticlesComponent implements OnInit {

  alias: string;
  pageType: string;

  blogContent:string = 'Special Blog Content Data from Page Articles';
  articleContent:string =  'Special Blog Content Data from Page Articles';

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.alias = this.route.snapshot.params['alias'];
    this.pageType = this.alias === undefined ? 'blog' : 'article';
  }

}
