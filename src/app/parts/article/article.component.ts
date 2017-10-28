import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent implements OnInit {

  @Input() page: string;
  @Input() alias: string;

  constructor() { }

  ngOnInit() {
  }

}
