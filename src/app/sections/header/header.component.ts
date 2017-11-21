import { Component, Input } from '@angular/core';

import { Path } from '../../interfaces/path.interface';

@Component({
  selector: 'aae-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  @Input() section: Path;

}
