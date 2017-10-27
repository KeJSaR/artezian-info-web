import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

@Component({
  selector: 'app-page-rules',
  templateUrl: './page-rules.component.html',
  styleUrls: ['./page-rules.component.sass']
})
export class PageRulesComponent implements OnInit {

  alias: string;
  pageType: string;

  content:string = 'Special Blog Content Data from Page Rules';
  articleContent:string =  'Special Blog Content Data from Page Rules';

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.alias = this.route.snapshot.params['alias'];
    this.pageType = this.alias === undefined ? 'content' : 'article';
  }

}
