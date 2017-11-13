import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../services/data.service';

import { Path } from '../interfaces/path.interface';

@Component({
  selector: 'app-page',
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

  section: Path =  {
    alias: '', 
    name: '' 
  }
  subsection: Path = { 
    alias: '', 
    name: '' 
  }

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
    this.setSubsectionName();
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

  /**
   * Set Aliases
   */

  private setSectionAlias(): void {
    this.section.alias = this.route.snapshot.data.section;
  }

  private setSubsectionAlias(pathLength: number): void {
    if (pathLength > 1) {
      this.subsection.alias = this.route.snapshot.params.subsection;
    }
  }

  /**
   * Set Names
   */

  private setSectionName(): void {
    this.data.getSectionName(this.section.alias).subscribe((data) => {
      this.section.name = data;
    });
  }

  private setSubsectionName(): void {
    if (this.subsection.alias) {
      this.data.getSubsectionName(this.section.alias, this.subsection.alias).subscribe((data) => {
        this.subsection.name = data;
      });
    }
  }

}
