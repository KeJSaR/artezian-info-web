import { Component, Input, HostListener, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { MenuItem } from '../../interfaces/menu-item.interface';
import { Text } from '../../interfaces/text.interface';

@Component({
  selector: 'aae-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  @Input() menu: MenuItem[];

  texts: Text[];
  height: string;

  constructor(private dataService: DataService) {
    this.height = this.setDimension(window.innerHeight);
  }

  ngOnInit() {
    this.setTexts();
  }

  setDimension(num: number): string {
    return num.toString() + 'px';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.height = this.setDimension(event.target.innerHeight);
  }

  private setTexts(): void {
    this.dataService.getTexts('about').subscribe((data) => {
      this.texts = data;
    });
  }

}
