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

  section: Path =  { alias: '', name: '' }
  subsection: Path = { alias: '', name: '' }

  constructor(
    private route: ActivatedRoute,
    private data: DataService
  ) {
    const pathLength: number = this.route.snapshot.url.length;
    this.section.alias = this.getSectionAlias();
    if (pathLength > 1) this.subsection.alias = this.getSubsectionAlias();
  }

  ngOnInit() {
    this.scrollToTop();
    this.getSectionName();
    if (this.subsection.alias) this.getSubsectionName();
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

  private getSectionAlias(): string {
    return this.route.snapshot.data.section;
  }

  private getSubsectionAlias(): string {
    return this.route.snapshot.params.subsection;
  }

  private getSectionName(): void {
    this.data.getSectionName(this.section.alias).subscribe((data) => {
      this.section.name = data;
    });
  }

  private getSubsectionName(): void {
    this.data.getSubsectionName(this.section.alias, this.subsection.alias).subscribe((data) => {
      this.subsection.name = data;
    });
  }

}
