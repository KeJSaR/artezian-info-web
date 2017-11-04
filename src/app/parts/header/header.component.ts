import { Component } from '@angular/core';
import { Input }     from '@angular/core';

import { Menu }      from '../../interfaces/menu.interface';

@Component({
  selector    : 'app-header',
  templateUrl : './header.component.html',
  styleUrls   : ['./header.component.sass']
})
export class HeaderComponent {

  @Input() page  : string;
  @Input() title : string;
  @Input() menu  : Menu[];

}
