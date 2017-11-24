import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../../services/data.service';
import { BlogItem } from '../../interfaces/blog-item.interface';

@Component({
  selector: 'aae-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})
export class BlogComponent implements OnInit {

  @Input() alias: string;

  blogItems: BlogItem[];
  currentPage: number = 1;
  lastPage: number;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setCurrentPage();
    this.setLastPage();
    this.setBlogItems();
  }

  private setCurrentPage(): void {
    this.route.queryParamMap
              .map((params: Params) => params.params)
              .subscribe((params) => {
                if (params && params['page']) {
                  this.currentPage = Number(params['page']);
                }
              });
  }

  private setLastPage(): void {
    this.dataService.getLastPage(this.alias).subscribe((data) => {
      this.lastPage = data;
    });
  }

  private setBlogItems(): void {
    let page = this.currentPage.toString();
    this.dataService.getBlogItems(this.alias, page).subscribe((data) => {
      this.blogItems = data;
    });
  }

}
