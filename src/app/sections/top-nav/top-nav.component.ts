import { Component, OnInit, Input, EventEmitter, HostListener } from '@angular/core';

import { MenuItem } from '../../interfaces/menu-item.interface';

@Component({
  selector: 'aae-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.sass']
})
export class TopNavComponent implements OnInit {

  @Input() alias: string;
  @Input() menu: MenuItem[];

  showTopNavContent: boolean = false;
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
      this.showTopNavContent = true;
    }
    else if (this.showTopNavContent && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.height) {
      this.showTopNavContent = false;
    }
  }

  private setHeight(height: number): void {
    this.height = height;
  }

}
