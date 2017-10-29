import { Component, OnInit } from '@angular/core';

import { DataService }       from './data.service';
import { Menu }              from './interfaces/menu.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  private menu: Menu[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getMenu().subscribe((data) => this.menu = data);
  }

}
