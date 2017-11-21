import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aae-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.sass']
})
export class CallComponent implements OnInit {

  @Input() alias: string;

  callText: string;
  buttonText: string;

  private call: string[] = [
    'Полевой лагерь и работа на раскопе',
    'Проверить физическую стойкость?',
    'Готов к полевым условиям?',
    'Любишь историю?',
    'Любишь антропологию?',
    'Любишь археологию?',
    'Любишь этнологию?',
    'Любопытствуешь по поводу археологии?',
    'Нравится антропология и этнология?',
    'Хочешь узнать образ жизни археолога?',
    'Внеси свой вклад в науку!',
    'Прикоснись к истории!',
    'Волонтёрская жизнь в экспедиции',
    'Активный физический отдых',
    'Полноценное изучение окружающей среды',
    'История и древние артефакты',
    'Передовой край исследований',
    'Обретение новых друзей',
    'Расширение круга знакомых',
    'Новые жизненные обстоятельства',
    'У нас будет очень интересно!',
    'У нас будет очень познавательно!',
    'У нас будет очень весело!',
    'Вы получите новые впечатления',
    'Вы получите замечательные эмоции',
    'Вы получите неповторимый опыт',
    'Тем, кто любит приключения',
    'Тем, кто любит необычные условия',
    'Тем, кто любит проверять себя',
    'Тем, кто любит общение, море, тепло и фрукты',
    'Тем, кто неравнодушен к настоящей науке'
  ];

  private button: string[] = [
    'Отправиться в экспедицию!',
    'Присоединиться!',
    'Поехать в экспедицию!',
    'В экспедицию!',
    'Принять участие!',
    'В путешествие!'
  ];

  ngOnInit() {
    this.setCallText();
    this.setButtonText();
  }

  private setCallText(): void {
    let max: number = this.call.length;
    let rand: number = Math.floor(Math.random() * max);
    this.callText = this.alias != 'form' ? this.call[rand] : '';
  }

  private setButtonText(): void {
    let max: number = this.button.length;
    let rand: number = Math.floor(Math.random() * max);
    this.buttonText = this.alias != 'form' ? this.button[rand] : '';
  }

}
