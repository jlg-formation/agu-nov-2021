import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { AutofocusDirective } from './autofocus.directive';

@Component({
  selector: 'test',
  template: '<div><input appAutofocus></div>',
})
export class TestComponent {}

describe('AutofocusDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, AutofocusDirective],
    }).compileComponents();
  });

  it('should focus', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const inputElt: Element = compiled.querySelector('input') as Element;
    const focusElt: Element = document.activeElement as Element;
    expect(inputElt).toBe(focusElt);
  });
});
