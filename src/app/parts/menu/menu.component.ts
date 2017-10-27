import { Component, OnInit } from '@angular/core';

import { DataService }       from '../../data.service';
import { MenuItem }          from '../../interfaces/menu-item.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  
  menu: MenuItem[];
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getMenu().subscribe((data) => this.menu = data);
  }

}
