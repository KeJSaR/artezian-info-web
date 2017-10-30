import { Component }      from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PageService }    from '../services/page.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.sass']
})
export class PagesComponent {

  private page:  string = '';
  private alias: string = '';
  private type:  string = '';

  constructor(
    private route: ActivatedRoute,
    private pageService: PageService
  ) {

    this.page = route.snapshot.data.page;
    this.type = route.snapshot.data.page;
    this.setPage(route.snapshot.data.page);

    if (route.snapshot.url.length > 1) {
      this.alias = route.snapshot.params.alias;
      this.type += '+';
    }

  }

  setPage(page: string) {
    this.pageService.setPage(page);
  }

}
