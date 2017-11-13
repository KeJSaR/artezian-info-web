import { Component, Input, HostListener, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Path } from '../../interfaces/path.interface';
import { Gallery } from '../../interfaces/gallery.interface';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.sass']
})
export class TopComponent implements OnInit {

  @Input() section: Path;
  @Input() subsection: Path;

  gallery: Gallery;
  windowHeight: string;
  windowWidth: string;

  // Main image data
  path: string = '';
  image: string = '';
  // Page data
  title: string = '';
  intro: string = '';
  // Author data
  name: string = '';
  info: string = '';

  constructor(private data: DataService) {
      this.windowHeight = this.setDimension(window.innerHeight);
      this.windowWidth  = this.setDimension(window.innerWidth);
  }

  ngOnInit() {
    this.init();
  }

  setDimension(num: number): string {
    return num.toString() + 'px';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowHeight = this.setDimension(event.target.innerHeight);
    this.windowWidth  = this.setDimension(event.target.innerWidth);
  }

  private init(): void {
    if (this.subsection.alias) {
      if (this.section.alias === 'gallery') {
        this.path = 'gallery';
        this.setGalleryInfo(this.subsection.alias);
      }
      else {
        this.path = 'articles';
        this.image = this.subsection.alias;
        this.title = this.subsection.name;
      }
    }
    else {
      this.path = 'pages';
      this.image = this.section.alias;
      this.title = this.section.name;
    }
  }

  private setGalleryInfo(galleryId: string): void {
    this.data.getGalleryInfo(galleryId).subscribe((data) => {
      this.gallery = data;
      this.setGalleryData();
    });
  }

  private setGalleryData()
  {
    this.image = this.gallery.image.toString();
    this.title = this.gallery.name;
    this.intro = this.gallery.info;
  }

}
