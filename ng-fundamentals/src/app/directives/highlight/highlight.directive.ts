import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {
	
	@Input('appHighlight') highlightColor: string
	@Input() defaultColor: string

  constructor(private el: ElementRef) { }
	
	@HostListener('mouseenter') onMouseEnter() {
		this.highlight(this.highlightColor || this.defaultColor || 'red');
	}
	
	@HostListener('mouseleave') onMouseLeave() {
		this.highlight(null);
	}
	
	@HostListener('click') onMouseClic() {
		this.el.nativeElement.innerHTML = 'click HostListener works';
	}
	
	private highlight(color: string) {
		this.el.nativeElement.style.backgroundColor = color;
	}

}

/*

- ElementRef injects a refernece to the host DOM element (the element I applied appHighlight to). 
	- grants direct access to the host DOM through the nativeElement property
- HostListener - a Decorator that declare a DOM event to listen for, and provides a handler method to run when that event occurs

*/
