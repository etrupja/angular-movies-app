import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeader]'
})
export class HeaderDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

}
