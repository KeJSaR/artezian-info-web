import { Component } from '@angular/core';
import { Input }     from '@angular/core';

import { Menu }      from '../../interfaces/menu.interface';

@Component({
  selector    : 'app-menu',
  templateUrl : './menu.component.html',
  styleUrls   : ['./menu.component.sass']
})
export class MenuComponent {

  @Input() page : string;
  @Input() menu : Menu[];

}
