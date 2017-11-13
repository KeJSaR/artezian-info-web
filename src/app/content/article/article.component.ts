import { Component, Input } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Article } from '../../interfaces/article.interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.sass']
})
export class ArticleComponent {

  @Input() alias: string;

  article: Article;

  constructor(private data: DataService) { }


  private getArticle(): void {
    this.data.getArticle(this.alias).subscribe((data) => {
      this.article = data;
    });
  }

}