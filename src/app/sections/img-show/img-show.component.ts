import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Image } from '../../interfaces/image.interface';

@Component({
  selector: 'app-img-show',
  templateUrl: './img-show.component.html',
  styleUrls: ['./img-show.component.sass']
})
export class ImgShowComponent implements OnInit {

  @Input() subalias: string;
  @Input() currentImg: string;
  @Input() images: Image[];

  @Output() close = new EventEmitter<boolean>();

  alias: number[] = [];
  names: string[] = [];
  index: number;
  image: number;

  constructor() { }

  ngOnInit() {
    this.setArrays();
    this.setIndex();
    this.setImage(this.index);
  }

  setArrays() {
    this.images.forEach(img => {
      this.alias.push(img.alias);
      this.names.push(img.name);
    });
  }

  setIndex() {
    this.index = this.alias.indexOf(parseInt(this.currentImg));
  }

  setImage(index) {
    this.image = this.alias[index];
  }

  showNext() {
    this.setImage(this.index++);
  }

  showPrev() {
    this.setImage(this.index--);
  }

  closeImgShow() {
    this.close.emit();
  }

}
