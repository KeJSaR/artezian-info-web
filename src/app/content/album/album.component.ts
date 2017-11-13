import { Component }   from '@angular/core';
import { OnInit }      from '@angular/core';
import { Input }       from '@angular/core';

import { DataService } from '../../services/data.service';

import { Image }       from '../../interfaces/image.interface';
import { Gallery }     from '../../interfaces/gallery.interface';

@Component({
  selector    : 'app-album',
  templateUrl : './album.component.html',
  styleUrls   : ['./album.component.sass']
})
export class AlbumComponent {

  @Input() alias : string;

  images : Image[];
  gallery : Gallery;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getImages(this.alias).subscribe((data) => {
      this.images = data;
    });
    
    this.dataService.getGalleryInfo(this.alias).subscribe((data) => {
      this.gallery = data;
    });

  }

}
