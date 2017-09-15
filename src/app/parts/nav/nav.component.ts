import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav>
      <a routerLink="/info">Об ААЭ</a>
      <a routerLink="/articles">Статьи</a>
      <a routerLink="/gallery">Фото</a>
      <a routerLink="/rules">Информация</a>
      <a routerLink="/application">Заявка</a>
      <a routerLink="/contacts">Контакты</a>
    </nav>
  `,
  styles: []
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
