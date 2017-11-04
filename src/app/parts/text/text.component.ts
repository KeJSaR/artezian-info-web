import { Component } from '@angular/core';
import { Input }     from '@angular/core';

import { Text }      from '../../interfaces/text.interface';

@Component({
  selector    : 'app-text',
  templateUrl : './text.component.html',
  styleUrls   : ['./text.component.sass']
})
export class TextComponent {

  @Input() text : string;

}
