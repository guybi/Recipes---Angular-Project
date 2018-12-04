import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appOnHoverLabel]'
})
export class OnHoverItemDirective {

  @HostBinding('style.color')
  color: string;

  @HostBinding('style.font-size')
  fontSize: string;

  @HostListener('mouseenter')
  onLeave() {
    this.color = 'lightskyblue';
    // this.fontSize = '20px';
  }

  @HostListener('mouseleave')
  onEvent() {
    this.color = 'black';
    // this.fontSize = '100px';
  }
  constructor() { }

}
