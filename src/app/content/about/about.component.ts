import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Text } from '../../interfaces/text.interface';
import { BlogItem } from '../../interfaces/blog-item.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  @Input() alias: string;

  private texts: Text[];
  private blogItems: BlogItem[];
  
  about = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.setTexts();
    this.setBlogItems();
  }

  private setTexts(): void {
    this.dataService.getTexts(this.alias).subscribe((data) => {
      this.texts = data;
      this.makeAbout();
    });
  }

  private setBlogItems(): void {
    this.dataService.getBlogItems(this.alias).subscribe((data) => {
      this.blogItems = data;
      this.makeAbout();
    });
  }

  private makeAbout(): void {
    if (this.texts !== undefined && this.blogItems !== undefined) {
      let tL = this.texts.length;
      let iL = this.blogItems.length;
      let max = tL > iL ? tL : iL;
      for (let i = 0; i < max; i++) {
        if (i < tL) this.about.push({type: 'text',  data: this.texts[i]});
        if (i < iL) this.about.push({type: 'intro', data: this.blogItems[i]});
      }
    }
  }

}
