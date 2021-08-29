import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private e: ElementRef ) { 
    e.nativeElement.style.color = '#e35e6b';
  }

}
