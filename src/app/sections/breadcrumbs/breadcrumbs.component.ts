import { Component, Input } from '@angular/core';

import { Path } from '../../interfaces/path.interface';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.sass']
})
export class BreadcrumbsComponent {

  @Input() section: Path;
  @Input() subsection: Path;

}
