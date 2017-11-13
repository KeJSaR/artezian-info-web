import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../../services/data.service';
import { BlogItem } from '../../interfaces/blog-item.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {

  @Input() alias: string;
  
  blogItems: BlogItem[];
  
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.setBlogItems();
  }

  private setBlogItems(): void {
    this.dataService.getBlogItems(this.alias).subscribe((data) => {
      this.blogItems = data;
    });
  }
  
}
