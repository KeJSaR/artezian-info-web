import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  template: `
    <app-header></app-header>
    <p>
      gallery Works!
    </p>
    <app-footer></app-footer>
  `,
  styles: []
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
