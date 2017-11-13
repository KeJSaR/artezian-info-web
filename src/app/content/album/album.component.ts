import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Image } from '../../interfaces/image.interface';
import { Gallery } from '../../interfaces/gallery.interface';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.sass']
})
export class AlbumComponent {

  @Input() subalias: string;

  images: Image[];
  gallery: Gallery;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.setImages();
    this.setInfo();
  }

  private setImages() {
    this.dataService.getGalleryImages(this.subalias).subscribe((data) => {
      this.images = data;
    });
  }

  private setInfo() {
    this.dataService.getGalleryInfo(this.subalias).subscribe((data) => {
      this.gallery = data;
    });
  }
}
