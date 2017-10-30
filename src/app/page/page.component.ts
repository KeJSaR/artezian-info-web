import { Component }      from '@angular/core';
import { OnInit }         from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService }    from '../services/data.service';
import { PageService }    from '../services/page.service';
import { Menu }           from '../interfaces/menu.interface';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass']
})
export class PageComponent implements OnInit {
  
  private menu:  Menu[];
  private page:  string = '';
  private alias: string = '';
  private type:  string = '';

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
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
  
  ngOnInit() {
    this.dataService.getMenu().subscribe((data) => this.menu = data);
    this.page = this.pageService.getPage();
  }

  setPage(page: string) {
    this.pageService.setPage(page);
  }

}
