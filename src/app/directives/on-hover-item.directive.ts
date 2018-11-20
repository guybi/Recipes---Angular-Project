import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appOnHoverLabel]'
})
export class OnHoverItemDirective {

  @HostBinding('style.color')
  color: string;

  @HostListener('mouseenter')
  onLeave() {
    this.color = 'lightskyblue';
  }

  @HostListener('mouseleave')
  onEvent() {
    this.color = 'black';
  }
  constructor() { }

}
