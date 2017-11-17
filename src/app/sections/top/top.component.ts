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
  @Input() subalias: string;

  gallery: Gallery;
  authorInfo: AuthorInfo;
  height: string;
  width: string;
  halfHeight: string;
  imageExist: boolean = false;
  galleryImageExist: boolean = false;
  subaliasExist: boolean = false;

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
      this.halfHeight = this.setDimension(window.innerHeight / 1.5);
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
    this.halfHeight = this.setDimension(event.target.innerHeight / 1.5);
    this.width  = this.setDimension(event.target.innerWidth);
  }

  private init(): void {
    if (this.subalias) {

      this.subaliasExist = true;

      if (this.section.alias === 'gallery') {
        this.path = 'gallery' + '/' + this.subalias;
        this.setGalleryInfo(this.subalias);
      }
      else {
        this.path = 'articles';
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
      this.isImageExist();
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

  private isImageExist(): void {
    this.data.isImageExist(this.path, this.image).subscribe((data) => {
      this.imageExist = data === 'true' ? true : false;
    });
  }

}
