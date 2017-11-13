import { Component, OnInit, Input } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Text } from '../../interfaces/text.interface';
import { Intro } from '../../interfaces/intro.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  @Input() page: string;

  private texts: Text[];
  private intros: Intro[];
  
  isReady: boolean = false;
  about = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getText(this.page).subscribe((data) => {
      this.texts = data;
      this.makeAbout();
    });

    this.dataService.getIntro(this.page).subscribe((data) => {
      this.intros = data;
      this.makeAbout();
    });

  }

  private makeAbout(): void {
    if (this.texts !== undefined && this.intros !== undefined) {
      let tL = this.texts.length;
      let iL = this.intros.length;
      let max = tL > iL ? tL : iL;
      for (let i = 0; i < max; i++) {
        if (i < tL) this.about.push({type: 'text',  data: this.texts[i]});
        if (i < iL) this.about.push({type: 'intro', data: this.intros[i]});
      }
      if (max > 0) this.isReady = true;
    }
  }

}
