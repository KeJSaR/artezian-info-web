import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Article } from '../../interfaces/article.interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent implements OnInit {

  @Input() alias: string;
  @Input() subalias: string;

  article: Article;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.setArticle();
  }

  private setArticle(): void {
    this.data.getArticle(this.alias, this.subalias).subscribe((data) => {
      this.article = data;
    });
  }

}
