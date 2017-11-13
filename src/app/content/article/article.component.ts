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
  @Input() subalias: string;

  article: Article;

  constructor(private data: DataService) { }


  private getArticle(): void {
    this.data.getArticle(this.alias, this.subalias).subscribe((data) => {
      this.article = data;
    });
  }

}
