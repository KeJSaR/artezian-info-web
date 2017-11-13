import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Gallery } from '../../interfaces/gallery.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {

	galleries: Gallery[];

	constructor(private dataService: DataService) { }

	ngOnInit() {
    this.setGalleriesData();
	}

  private setGalleriesData(): void {
    this.dataService.getGalleries().subscribe((data) => {
      this.galleries = data;
    });
  }
}
