import { Component, Input } from '@angular/core';

import { TextMain } from '../../interfaces/text-main.interface';

@Component({
  selector: 'aae-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.sass']
})
export class TextComponent {

  @Input() text: TextMain;

}
