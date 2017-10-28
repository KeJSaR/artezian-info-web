import { Component, OnInit } from '@angular/core';

import { DataService }       from '../../data.service';
import { Menu }              from '../../interfaces/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  private menu: Menu[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getMenu().subscribe((data) => this.menu = data);
  }

}
