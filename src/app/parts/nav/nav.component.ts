import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav>
      <a routerLink="/info">Info</a>
      <a routerLink="/articles">Articles</a>
      <a routerLink="/gallery">Gallery</a>
      <a routerLink="/rules">Rules</a>
      <a routerLink="/application">Application</a>
      <a routerLink="/contacts">Contacts</a>
    </nav>
  `,
  styles: []
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
