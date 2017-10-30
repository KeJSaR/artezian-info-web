import { Component } from '@angular/core';
import { Input }     from '@angular/core';

@Component({
  selector    : 'app-article',
  templateUrl : './article.component.html',
  styleUrls   : ['./article.component.sass']
})
export class ArticleComponent {

  @Input() page  : string;
  @Input() alias : string;

}
