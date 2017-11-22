import { Component, OnInit, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../services/data.service';

import { Path } from '../interfaces/path.interface';

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
  showSidebar: boolean = false;
  height: number;
  pageDownTop: string;

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
      if (currentScroll < window.innerHeight - 120) {
        window.requestAnimationFrame(downscroll);
        window.scrollTo(0, window.innerHeight - 120);
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
    this.height = window.innerHeight - 120;
    this.setPageDownTop();
  }

  private setPageDownTop(): void {
    this.pageDownTop = (this.height - 75).toString() + 'px';
  }

  switchSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }

}
