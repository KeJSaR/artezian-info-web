import { Component } from '@angular/core';
import { Input }     from '@angular/core';

@Component({
  selector    : 'app-breadcrumbs',
  templateUrl : './breadcrumbs.component.html',
  styleUrls   : ['./breadcrumbs.component.sass']
})
export class BreadcrumbsComponent {

  @Input() page  : string;
  @Input() title : string;
  @Input() alias : string;

}
