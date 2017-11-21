import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { MenuItem } from '../../interfaces/menu-item.interface';

@Component({
  selector: 'aae-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  menu: MenuItem[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.setMenu();
  }

  private setMenu() {
    this.data.getMenuItems().subscribe((data) => {
      this.menu = data;
    });
  }

}
