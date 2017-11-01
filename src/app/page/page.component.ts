import { Component }      from '@angular/core';
import { OnInit }         from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService }    from '../services/data.service';
import { Menu }           from '../interfaces/menu.interface';

@Component({
  selector    : 'app-page',
  templateUrl : './page.component.html',
  styleUrls   : ['./page.component.sass']
})
export class PageComponent implements OnInit {

  private menu  : Menu[];
  private page  : string = '';
  private title : string = '';
  private alias : string = '';
  private type  : string = '';

  constructor(
    private route       : ActivatedRoute,
    private dataService : DataService
  ) {

    let isAlias: boolean    = this.checkAlias();
    if (isAlias) this.alias = this.getAlias();

    this.page = this.getPage();
    this.type = this.getType(isAlias);

  }

  ngOnInit() {
    return this.dataService.getMenu().subscribe((data) => {
      this.menu  = data;
      this.title = this.getTitle();
    });
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

  private getType(isAlias): string {
    return isAlias ? this.page + '+' : this.page;
  }

  private getTitle(): string {
    for (let item of this.menu) {
      if (item.alias === this.page) return item.title;
    }
  }

}
