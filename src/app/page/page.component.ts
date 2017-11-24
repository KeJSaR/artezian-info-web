import { Component, OnInit, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../services/data.service';

import { Path } from '../interfaces/path.interface';
import { MenuItem } from '../interfaces/menu-item.interface';

@Component({
  selector: 'aae-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.sass']
})
export class PageComponent implements OnInit {

  // ===========================================================================

  // url
  // [scheme:] [//host[:port]] [/path] [?query] [#fragment]

  // path
  // [/section] [/subsection]

  // ===========================================================================

  section: Path = {
    alias: '',
    name: ''
  }
  subalias: string = '';
  height: number;
  pageDownTop: string;
  menu: MenuItem[];

  constructor(
    private route: ActivatedRoute,
    private data: DataService
  ) {
    const pathLength: number = this.route.snapshot.url.length;
    this.setSectionAlias();
    this.setSubsectionAlias(pathLength);
  }

  ngOnInit() {
    this.scrollToTop();
    this.setSectionName();
    this.setHeight();
    this.setMenu();
  }

  scrollToTop() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, 0);
      }
    })();
  }

  scrollDown() {
    (function downscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll < window.innerHeight) {
        window.requestAnimationFrame(downscroll);
        window.scrollTo(0, window.innerHeight);
      }
    })();
  }

  private setSectionAlias(): void {
    this.section.alias = this.route.snapshot.data.section;
  }

  private setSubsectionAlias(pathLength: number): void {
    if (pathLength > 1) {
      this.subalias = this.route.snapshot.params.subsection;
    }
  }

  private setSectionName(): void {
    this.data.getSectionName(this.section.alias).subscribe((data) => {
      this.section.name = data;
    });
  }

  private setHeight(): void {
    this.height = window.innerHeight;
    this.setPageDownTop();
  }

  private setPageDownTop(): void {
    this.pageDownTop = (this.height - 75).toString() + 'px';
  }

  private setMenu() {
    this.data.getMenuItems().subscribe((data) => {
      this.menu = data;
    });
  }

}
