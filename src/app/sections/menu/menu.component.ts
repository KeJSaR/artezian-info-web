import { Component, Input } from '@angular/core';

import { MenuItem } from '../../interfaces/menu-item.interface';

@Component({
  selector: 'aae-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {

  @Input() alias: string;
  @Input() menu: MenuItem[];

}
