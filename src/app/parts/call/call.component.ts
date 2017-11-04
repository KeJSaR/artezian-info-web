import { Component } from '@angular/core';
import { OnInit }    from '@angular/core';
import { Input }     from '@angular/core';

@Component({
  selector    : 'app-call',
  templateUrl : './call.component.html',
  styleUrls   : ['./call.component.sass']
})
export class CallComponent implements OnInit {

  @Input() page: string;

  callText : string;
  buttonText : string;
  call : string[] = [
    'Полевой лагерь и работа на раскопе',
    'Проверить физическую стойкость?',
    'Готов к полевым условиям?',
    'Любишь историю?',
    'Любопытствуешь по поводу археологии?',
    'Узнать образ жизни археолога',
    'Волонтёрская жизнь в экспедиции',
    'Активный физический отдых',
    'Полноценное изучение окружающей среды',
    'История и древнии артефакты',
    'Обретение новых друзей',
    'Расширение круга знакомых',
    'Разнообразные жизненные обстоятельства',
    'Нравится антропология и этнология',
    'У нас будет очень интересно и познавательно',
    'Вы получите новые впечатления',
    'Вы получите замечательные эмоции',
    'Тем, кто любит приключения',
    'Тем, кто любит необычные условия',
    'Тем, кто любит проверять себя',
    'Тем, кто любит общение, море, тепло, фрукты'
  ];
  button : string[] = [
    'Отправиться в экспедицию!',
    'Присоединиться!',
    'Поехать в экспедицию!',
    'В экспедицию!',
    'Принять участие!',
    'В путешествие!'
  ];

  ngOnInit() {
    this.callText = this.getText();
    this.buttonText = this.getButton();
  }

  getText(): string {
    let max  : number = this.call.length;
    let rand : number = Math.floor(Math.random() * max);
    return this.page != 'main' && this.page != 'form' ? this.call[rand] : '';
  }

  getButton(): string {
    let max  : number = this.button.length;
    let rand : number = Math.floor(Math.random() * max);
    return this.page != 'main' && this.page != 'form' ? this.button[rand] : '';
  }

}
