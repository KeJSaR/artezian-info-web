import { Component, OnInit } from '@angular/core';

import { DataService }       from './services/data.service';
import { PageService }       from './services/page.service';
import { Menu }              from './interfaces/menu.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  private menu: Menu[];
  private page: string;

  constructor(
    private dataService: DataService,
    private pageService: PageService
  ) { }

  ngOnInit() {
    this.dataService.getMenu().subscribe((data) => this.menu = data);
    this.page = this.pageService.getPage();
  }

}
