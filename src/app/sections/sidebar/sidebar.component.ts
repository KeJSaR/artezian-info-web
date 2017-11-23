import { Component, Input } from '@angular/core';

import { MenuItem } from '../../interfaces/menu-item.interface';

@Component({
  selector: 'aae-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent {

  @Input() menu: MenuItem[];

  show: boolean = false;
  info: string;

  showInfo(id: number) {
    this.show = true;
    this.info = this.menu[id].info;
  }

}
