import { Component, Input, HostListener, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { MenuItem } from '../../interfaces/menu-item.interface';
import { Text } from '../../interfaces/text.interface';
import { TextMain } from '../../interfaces/text-main.interface';

@Component({
  selector: 'aae-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  @Input() menu: MenuItem[];

  intro: string;
  texts: TextMain[] = [];
  height: string;
  contentHeight: string;

  constructor(private dataService: DataService) {
    this.setDimension(window.innerHeight);
  }

  ngOnInit() {
    this.setTexts();
  }

  setDimension(num: number): void {
    this.height = num.toString() + 'px';
    this.contentHeight = (num - 300).toString() + 'px';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setDimension(event.target.innerHeight);
  }

  private setTexts(): void {
    this.dataService.getTexts('about').subscribe((data) => {
      this.prepareTexts(data);
    });
  }

  private prepareTexts(texts: Text[]) {
    this.intro = texts[0].content;
    texts.forEach((text) => {
      if (text.id > 0) {
        this.texts.push({
          img: text.id,
          content: text.content,
          type: text.id % 2 === 0 ? 'left' : 'right'
        });
      }
    });
  }

}
