import { Component } from '@angular/core';
import { Input }     from '@angular/core';

@Component({
  selector    : 'app-content',
  templateUrl : './content.component.html',
  styleUrls   : ['./content.component.sass']
})
export class ContentComponent {

  @Input() page: string;

}
