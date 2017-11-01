import { Component } from '@angular/core';
import { Input }     from '@angular/core';

@Component({
  selector    : 'app-blog',
  templateUrl : './blog.component.html',
  styleUrls   : ['./blog.component.sass']
})
export class BlogComponent {

  @Input() page  : string;

}
