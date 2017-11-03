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

  private texts   : Text[];
  private intros  : Intro[];
  isReady : boolean = false;
  content = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getText(this.page).subscribe((data) => {
      this.texts = data;
      this.makeContent();
    });

    this.dataService.getIntro(this.page).subscribe((data) => {
      this.intros = data;
      this.makeContent();
    });

  }

  private makeContent(): void {
    if (this.texts !== undefined && this.intros !== undefined) {
      let tL = this.texts.length;
      let iL = this.intros.length;
      let max = tL > iL ? tL : iL;
      for (let i = 0; i < max; i++) {
        if (i < tL) this.content.push({type: 'text',  data: this.texts[i]});
        if (i < iL) this.content.push({type: 'intro', data: this.intros[i]});
      }
      if (max > 0) this.isReady = true;
    }
  }

}
