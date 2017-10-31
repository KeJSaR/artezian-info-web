import { Component }   from '@angular/core';
import { OnInit }      from '@angular/core';
import { Input }       from '@angular/core';

import { DataService } from '../../services/data.service';

import { Text }        from '../../interfaces/text.interface';
import { Intro }       from '../../interfaces/intro.interface';

@Component({
  selector    : 'app-content',
  templateUrl : './content.component.html',
  styleUrls   : ['./content.component.sass']
})
export class ContentComponent implements OnInit {

  @Input() page: string;

  private texts  : Text[];
  private intros : Intro[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getText(this.page).subscribe((data) => this.texts = data);
    this.dataService.getIntro(this.page).subscribe((data) => this.intros = data);
  }

}
