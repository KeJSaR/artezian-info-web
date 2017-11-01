import { Component }   from '@angular/core';
import { OnInit }      from '@angular/core';
import { Input }       from '@angular/core';

import { DataService } from '../../services/data.service';

import { Article }     from '../../interfaces/article.interface';

@Component({
  selector    : 'app-article',
  templateUrl : './article.component.html',
  styleUrls   : ['./article.component.sass']
})
export class ArticleComponent implements OnInit {

  @Input() page  : string;
  @Input() alias : string;

  private article: Article;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getArticle(this.page, this.alias).subscribe((data) => {
      this.article = data;
    });

  }

}
