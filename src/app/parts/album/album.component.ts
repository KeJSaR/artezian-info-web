import { Component } from '@angular/core';
import { Input }     from '@angular/core';

@Component({
  selector    : 'app-album',
  templateUrl : './album.component.html',
  styleUrls   : ['./album.component.sass']
})
export class AlbumComponent {

  @Input() alias: string;

}
