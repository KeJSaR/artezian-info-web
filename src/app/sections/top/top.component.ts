import { Component, Input, HostListener, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Path } from '../../interfaces/path.interface';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.sass']
})
export class TopComponent implements OnInit {

  @Input() section: Path;
  @Input() subName: Path;

  path: string = '';
  image: string = '';
  title: string = '';
  name: string = '';
  info: string = '';
  intro: string = '';

  windowHeight: string;
  windowWidth: string;

  constructor(private data: DataService) {
      this.windowHeight = this.setDimension(window.innerHeight);
      this.windowWidth  = this.setDimension(window.innerWidth);
  }

  ngOnInit() {

    if (this.subName) {
      if (this.section.alias === 'gallery') {
        this.path = 'gallery';
        this.image = this.section.alias;
      } else {
        this.path = 'pages';
        this.image = this.section.alias;
      }
    } else {
      this.path = 'pages';
      this.image = this.section.alias;
    }

    this.data.getMenuItems().subscribe((data) => {
      this.menu = data;
    });
  }

  setDimension(num: number): string {
    return num.toString() + 'px';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowHeight = this.setDimension(event.target.innerHeight);
    this.windowWidth  = this.setDimension(event.target.innerWidth);
  }

}
