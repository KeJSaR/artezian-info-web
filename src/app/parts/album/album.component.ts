import { Component }   from '@angular/core';
import { OnInit }      from '@angular/core';
import { Input }       from '@angular/core';

import { DataService } from '../../services/data.service';

import { Image }       from '../../interfaces/image.interface';

@Component({
  selector    : 'app-album',
  templateUrl : './album.component.html',
  styleUrls   : ['./album.component.sass']
})
export class AlbumComponent {

  @Input() page  : string;
  @Input() alias : string;

  private images : Image[];

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getImages(this.alias).subscribe((data) => {
      this.images = data;
    });

  }

}
