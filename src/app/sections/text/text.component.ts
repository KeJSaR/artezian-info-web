import { Component, Input, OnInit, HostListener } from '@angular/core';

import { Text } from '../../interfaces/text.interface';

@Component({
  selector: 'aae-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.sass']
})
export class TextComponent implements OnInit {

  @Input() text: Text;

  height: string

  ngOnInit() {
    this.setHeight();
  }

  private setHeight(): void {
    this.height = this.setDimension(window.innerHeight);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.height = this.setDimension(event.target.innerHeight);
  }

  setDimension(num: number): string {
    return (num - 520).toString() + 'px';
  }

}
