import { Component } from '@angular/core';
import { Input }     from '@angular/core';

import { Article }   from '../../interfaces/article.interface';

@Component({
  selector    : 'app-article',
  templateUrl : './article.component.html',
  styleUrls   : ['./article.component.sass']
})
export class ArticleComponent {

  @Input() article : Article;

}
