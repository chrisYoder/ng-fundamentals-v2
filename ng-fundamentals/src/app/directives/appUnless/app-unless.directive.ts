import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAppUnless]'
})
export class AppUnlessDirective {
	private hasView = false;
  constructor(
		private templateRef: TemplateRef<any>, 
		private viewContainer: ViewContainerRef
	) { }

	@Input() set appUnless(condition: boolean){
		if (!condition && !this.hasView){
			// checks to see if there is no view and if the condition is falsy and then creates a view
			this.viewContainer.createEmbeddedView(this.templateRef);
			this.hasView = true;
		}
		
		else if(condition && this.hasView) {
			// if there is a view then we clear it out
			this.viewContainer.clear();
			this.hasView = false;
		}
	}
}
