import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.sass']
})
export class PageAboutComponent implements OnInit {

  alias: string;
  type: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.alias = this.route.snapshot.params['alias'];
    this.type = this.alias === undefined ? 'page-content' : 'page-article';
  }

}
