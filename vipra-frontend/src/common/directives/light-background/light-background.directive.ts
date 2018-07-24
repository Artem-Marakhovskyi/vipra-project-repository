import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[lightBackground]'
})
export class LightBackgroundDirective {
    constructor(el: ElementRef) {
        var bg = el.nativeElement.style.backgroundColor;
        el.nativeElement.style.backgroundColor = '#274f90ca';

        // var blur = 'blur(5px)';
        // el.nativeElement.style['-webkit-filter'] = 'blur(5px)';
     }
}