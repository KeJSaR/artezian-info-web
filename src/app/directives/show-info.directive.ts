import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[showInfo]'
})
export class ShowInfoDirective {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(false);
  }

  private highlight(show: boolean) {
    if (show) {
      this.renderer.addClass(this.el.nativeElement, 'show-info');
    }
    else {
      this.renderer.removeClass(this.el.nativeElement, 'show-info');
    }    
  }

}
