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
    'полевой лагерь и работа на раскопе',
    'проверить физическую стойкость?',
    'готов к полевым условиям?',
    'любишь историю?',
    'любопытствуешь по поводу археологии?',
    'узнать образ жизни археолога',
    'волонтёрская жизнь в экспедиции',
    'активный физический отдых',
    'полноценное изучение окружающей среды',
    'история и древнии артефакты',
    'обретение новых друзей',
    'расширение круга знакомых',
    'разнообразные жизненные обстоятельства',
    'нравится антропология и этнология',
    'у нас будет очень интересно и познавательно',
    'вы получите новые впечатления',
    'вы получите замечательные эмоции',
    'тем, кто любит приключения',
    'тем, кто любит необычные условия',
    'тем, кто любит проверять себя',
    'тем, кто любит общение, море, тепло, фрукты'
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
