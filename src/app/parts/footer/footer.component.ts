import { Component } from '@angular/core';
import { Input }     from '@angular/core';

@Component({
  selector    : 'app-footer',
  templateUrl : './footer.component.html',
  styleUrls   : ['./footer.component.sass']
})
export class FooterComponent {

  @Input() page: string;

}
