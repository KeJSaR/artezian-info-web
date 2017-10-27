import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.sass']
})
export class PageAboutComponent implements OnInit {

  alias: string;
  pageType: string;

  content:string = 'Special Blog Content Data from Page About';
  articleContent:string =  'Special Blog Content Data from Page About';

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.alias = this.route.snapshot.params['alias'];
    this.pageType = this.alias === undefined ? 'content' : 'article';
  }

}
