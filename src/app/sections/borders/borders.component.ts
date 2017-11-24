import { Component, OnInit, Input, EventEmitter, HostListener } from '@angular/core';

import { MenuItem } from '../../interfaces/menu-item.interface';

@Component({
  selector: 'aae-borders',
  templateUrl: './borders.component.html',
  styleUrls: ['./borders.component.sass']
})
export class BordersComponent implements OnInit {

  @Input() alias: string;
  @Input() menu: MenuItem[];

  showBordersContent: boolean = false;
  height: number;

  ngOnInit() {
    this.setHeight(window.innerHeight);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setHeight(event.target.innerHeight);
  }

  @HostListener('window: scroll', [])
  onWindowScroll() {
    if ((window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) >= this.height) {
      this.showBordersContent = true;
    }
    else if (this.showBordersContent && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.height) {
      this.showBordersContent = false;
    }
  }

  private setHeight(height: number): void {
    this.height = height;
  }

}
