import { Component } from '@angular/core';
import { ActivatedRoute }    from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.sass']
})
export class PagesComponent {

  private page:  string = '';
  private alias: string = '';
  private type:  string = '';

  constructor(private route: ActivatedRoute) {
    this.page = route.snapshot.data.page;
    this.type = this.page;
    if (route.snapshot.url.length > 1) {
      this.alias = route.snapshot.params.alias;
      this.type += '+';
    }
  }

}
