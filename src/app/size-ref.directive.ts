import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { NavDrawerComponent } from './components/nav-drawer/nav-drawer.component';

@Directive({
  selector: '[appSizeRef]'
})
export class SizeRefDirective {
  width = 0;
  @Input() appSizeRef!: NavDrawerComponent;

  @HostBinding('attr.--bx') myBx!: string;
  @HostBinding('attr.--bw') myBw!: string;
  @HostBinding('attr-enlarging') enlarging: boolean = false;
  constructor() { }

  // @HostListener("") on/
  @HostListener('click', ['$event.target']) onClick() {
    console.log('drawer comp: ', this.appSizeRef)
    this.appSizeRef.dimensionX = this.myBx;
    this.appSizeRef.dimensionW = this.myBw;
    this.enlarging = true;
  }
}
