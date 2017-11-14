import { Component, Input, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Path } from '../../interfaces/path.interface';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.sass']
})
export class BreadcrumbsComponent implements OnInit {

  @Input() section: Path;
  @Input() subalias: string;

  subname: string = '';

  constructor(private data: DataService) { }

  ngOnInit() {
    this.setSubname(this.section.alias, this.subalias);
  }

  private setSubname(alias: string, subalias: string) {
    this.data.getSubsectionName(alias, subalias).subscribe((data) => {
      this.subname = data;
    });
  }

}
