import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective implements AfterViewInit {
  constructor(private elt: ElementRef<HTMLInputElement>) {
    console.log('directive autofocus');
  }
  ngAfterViewInit(): void {
    this.elt.nativeElement.select();
  }
}
