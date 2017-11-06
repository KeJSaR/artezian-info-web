import { Component }      from '@angular/core';
import { OnInit }         from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService }    from '../services/data.service';
import { Menu }           from '../interfaces/menu.interface';
import { Article }        from '../interfaces/article.interface';

@Component({
  selector    : 'app-page',
  templateUrl : './page.component.html',
  styleUrls   : ['./page.component.sass']
})
export class PageComponent implements OnInit {

  menu    : Menu[];
  article : Article;
  isAlias : boolean = false;
  page    : string  = '';
  title   : string  = '';
  alias   : string  = '';
  type    : string  = '';
  articleTitle : string = '';

  constructor(
    private route       : ActivatedRoute,
    private dataService : DataService
  ) {

    this.isAlias = this.checkAlias();
    if (this.isAlias) this.alias = this.getAlias();

    this.page = this.getPage();
    this.type = this.getType();

  }

  ngOnInit() {

    this.scrollToTop();

    this.dataService.getMenu().subscribe((data) => {
      this.menu  = data;
      this.title = this.getTitle();
    });

    if (this.isAlias) this.getContent();
  }

  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, 0);
      }
    })();
  }

  private getPage(): string {
    return this.route.snapshot.data.page;
  }

  private checkAlias(): boolean {
    return this.route.snapshot.url.length > 1
  }

  private getAlias(): string {
    return this.route.snapshot.params.alias;
  }

  private getType(): string {
    return this.isAlias ? this.page + '+' : this.page;
  }

  private getTitle(): string {
    for (let item of this.menu) {
      if (item.alias === this.page) return item.title;
    }
  }

  private getArticle(): void {
    this.dataService.getArticle(this.page, this.alias).subscribe((data) => {
      this.article = data;
      this.articleTitle = data.title;
    });
  }

  private getAlbum(): void {

  }

  private getContent(): void {
    switch(this.page) {
      case 'about':
      case 'articles':
      case 'rules':
        this.getArticle();
        break;
      case 'gallery':
        this.getAlbum();
        break;
    }
  }

}
