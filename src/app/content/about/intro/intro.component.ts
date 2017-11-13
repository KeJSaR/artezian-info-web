import { Component, Input } from '@angular/core';

import { Intro } from '../../interfaces/intro.interface';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.sass']
})
export class IntroComponent {

  @Input() page: string;
  @Input() introData: Intro;

}
