import { Component, Input } from '@angular/core';

import { BlogItem } from '../../../interfaces/blog-item.interface';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.sass']
})
export class BlogItemComponent {

  @Input() blogItem: BlogItem;
  @Input() alias: string;

}
