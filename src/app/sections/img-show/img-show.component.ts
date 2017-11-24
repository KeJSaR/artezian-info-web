import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

import { Image } from '../../interfaces/image.interface';

@Component({
  selector: 'aae-img-show',
  templateUrl: './img-show.component.html',
  styleUrls: ['./img-show.component.sass']
})
export class ImgShowComponent implements OnInit {

  @Input() albumName: string;
  @Input() subalias: string;
  @Input() currentImg: string;
  @Input() images: Image[];

  @Output() close = new EventEmitter<boolean>();

  aliases: number[] = [];
  names: string[] = [];
  index: number;
  image: number;
  height: number;
  width: number;
  imgHeight: number;
  imgWidth: number;
  currImgHeight: string;
  currImgWidth: string;
  maxNum: number;
  currNum: number;

  constructor() { }

  ngOnInit() {
    this.setArrays();
    this.setIndex();
    this.setImage(this.index);
    this.height = window.innerHeight;
    this.width  = window.innerWidth;
  }

  setArrays(): void {
    this.images.forEach(img => {
      this.aliases.push(img.alias);
      this.names.push(img.name);
    });
  }

  setIndex(): void {
    this.index = this.aliases.indexOf(parseInt(this.currentImg));
    this.setMaxNum();
    this.setCurrNum();
  }

  setMaxNum() {
    this.maxNum = this.aliases.length;
  }

  setCurrNum() {
    this.currNum = this.index + 1;
  }

  setImage(index: number): void {
    this.image = this.aliases[index];
  }

  showNext(): void {
    this.index = this.index + 1 === this.maxNum ? 0 : this.index + 1;
    this.setImage(this.index);
    this.setCurrNum()
  }

  showPrev(): void {
    this.index = this.index - 1 < 0 ? this.maxNum - 1 : this.index - 1;
    this.setImage(this.index);
    this.setCurrNum();
  }

  getSize(img: any): void {
    this.imgHeight = img.clientHeight;
    this.imgWidth = img.clientWidth;
    this.setSize();
  }

  setSize(): void {
    let imgDim: number = this.imgWidth / this.imgHeight;
    let scrDim: number = this.width / this.height;

    if (imgDim < scrDim) {
      this.currImgHeight = this.height.toString() + 'px';
      this.currImgWidth = 'auto';
    }
    else {
      this.currImgHeight = 'auto';
      this.currImgWidth = this.width.toString() + 'px';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.height = event.target.innerHeight;
    this.width  = event.target.innerWidth;
    this.setSize();
  }

  closeImgShow(): void {
    this.close.emit();
  }

}
