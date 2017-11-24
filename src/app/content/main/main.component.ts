import { Component, Input } from '@angular/core';

import { MenuItem } from '../../interfaces/menu-item.interface';

@Component({
  selector: 'aae-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent {

  @Input() menu: MenuItem[];

  height: string;

  constructor() {
    this.height = window.innerHeight.toString() + 'px';
  }

}
