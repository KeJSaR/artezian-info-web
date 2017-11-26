import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Text } from '../../interfaces/text.interface';
import { BlogItem } from '../../interfaces/blog-item.interface';

@Component({
  selector: 'aae-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  @Input() alias: string;

  blogItems: BlogItem[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.setBlogItems();
  }

  private setBlogItems(): void {
    this.dataService.getBlogItems(this.alias, 'all').subscribe((data) => {
      this.blogItems = data;
    });
  }

}
