import { Component, Input, HostListener, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Path } from '../../interfaces/path.interface';
import { Gallery } from '../../interfaces/gallery.interface';
import { AuthorInfo } from '../../interfaces/author-info.interface';
import { MenuItem } from '../../interfaces/menu-item.interface';

@Component({
  selector: 'aae-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.sass']
})
export class TopComponent implements OnInit {

  @Input() section: Path;
  @Input() subalias: string;
  @Input() menu: MenuItem[];

  gallery: Gallery;
  authorInfo: AuthorInfo;
  height: string;
  width: string;
  imageExist: boolean = false;
  galleryImageExist: boolean = false;
  subaliasExist: boolean = false;
  topImgUrl: string;

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
    if (this.subalias) {

      this.subaliasExist = true;

      if (this.section.alias === 'gallery') {
        this.setGalleryInfo(this.subalias);
      }
      else {
        this.image = this.subalias;
        this.setArticleTitle(this.section.alias, this.subalias);
        this.setAuthorInfo(this.section.alias, this.subalias);
        this.isImageExist();
      }
    }
    else {
      this.path = 'pages';
      this.image = this.section.alias;
      this.setPageInfo(this.section.alias);
      this.setTopImage();
    }
  }

  private setGalleryInfo(galleryId: string): void {
    this.data.getGalleryInfo(galleryId).subscribe((data) => {
      this.gallery = data;
      this.setGalleryData();
    });
  }

  private setGalleryData(): void {
    this.image = this.gallery.image_id.toString();
    this.title = this.gallery.name;
    this.intro = this.gallery.info;
    this.galleryImageExist = true;
    this.setTopImage();
  }

  private setArticleTitle(alias: string, subalias: string) {
    this.data.getSubsectionName(alias, subalias).subscribe((data) => {
      this.title = data;
    });
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

  private setTopImage(): void {
    if (this.galleryImageExist) {
      this.topImgUrl = 'http://artezian.zone/gallery/' + this.subalias + '/' + this.image + '.jpg';
    }
    else if (this.imageExist) {
      this.topImgUrl = 'http://artezian.zone/articles/' + this.image + '.jpg';
    }
    else if (this.path === 'pages') {
      this.topImgUrl = 'http://artezian.zone/pages/' + this.section.alias + '.jpg';
    }
    else {
      this.topImgUrl = 'http://artezian.zone/pages/' + this.section.alias + '-default.jpg';
    }
  }

  private isImageExist(): void {
    this.data.isImageExist(this.image).subscribe((data) => {
      this.imageExist = data === 'true' ? true : false;
      this.setTopImage();
    });
  }

}
