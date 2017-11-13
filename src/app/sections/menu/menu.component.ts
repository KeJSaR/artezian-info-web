import { Component, Input, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { MenuItem } from '../../interfaces/menu-item.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  @Input() alias: string;

  menu: MenuItem[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.setMenuItems();
  }

  private setMenuItems() {
    this.data.getMenuItems().subscribe((data) => {
      this.menu = data;
    });
  }
}
