import { Component, Input, HostListener, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Path } from '../../interfaces/path.interface';
import { Gallery } from '../../interfaces/gallery.interface';
import { AuthorInfo } from '../../interfaces/author-info.interface';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.sass']
})
export class TopComponent implements OnInit {

  @Input() section: Path;
  @Input() subsection: Path;

  gallery: Gallery;
  authorInfo: AuthorInfo;
  height: string;
  width: string;

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
      this.height = this.setDimension(window.innerHeight);
      this.width  = this.setDimension(window.innerWidth);
  }

  ngOnInit() {
    this.init();
  }

  setDimension(num: number): string {
    return (num - 120).toString() + 'px';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.height = this.setDimension(event.target.innerHeight);
    this.width  = this.setDimension(event.target.innerWidth);
  }

  private init(): void {
    if (this.subsection.alias) {
      if (this.section.alias === 'gallery') {
        this.path = 'gallery' + '/' + this.subsection.alias;
        this.setGalleryInfo(this.subsection.alias);
      }
      else {
        this.path = 'articles';
        this.image = this.subsection.alias;
        this.title = this.subsection.name;
        this.setAuthorInfo(this.section.alias, this.subsection.alias);
      }
    }
    else {
      this.path = 'pages';
      this.image = this.section.alias;
      this.setPageInfo(this.section.alias);
    }
  }

  private setGalleryInfo(galleryId: string): void {
    this.data.getGalleryInfo(galleryId).subscribe((data) => {
      this.gallery = data;
      this.setGalleryData();
    });
  }

  private setGalleryData(): void {
    this.image = this.gallery.image.toString();
    this.title = this.gallery.name;
    this.intro = this.gallery.info;
  }

  private setAuthorInfo(alias: string, subalias: string): void {
    this.data.getAuthorInfo(alias, subalias).subscribe((data) => {
      this.authorInfo = data;
      this.setAuthorData();
    });
  }

  private setAuthorData(): void {
    this.name = this.authorInfo.name;
    this.info = this.authorInfo.info;
  }

  private setPageInfo(alias: string): void {
    this.data.getPageInfo(alias).subscribe((data) => {
      this.intro = data;
    });
  }

}
