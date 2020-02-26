# Angular Fundamentals

[Source](https://angular.io/guide/architecture)

## Intro to Basic Concepts
- Angular is a platform and framework for building single-page applications
	- NgModules
		- use @NgModule decorator identifies modules 
			- decorators in Angular attach metadata to classes or properties so that Angular knows what those classes or properties mean and how they should work
		- NgModules are containers for a cohesive block of code dedicated to an app domain, workflow, or closely related set of capabilities.
		- @NgModule takes a metadata object that tells angular how to compile and launch the application (below is for the AppModule) 
			- declarations 
				- tells Angular which components belong to that module 
				- I must declare every component in exactly one NgModule class 
				- only takes declarables 
					- components
					- directives
						- structural directives - change the DOM layout by adding and removing DOM elements
							- ngFor and NgIf
						- Attribute directives - change the appearance or behavior of an element, component, or another directive.
				- exports -- the subset of declaratiosn that should be visible and usable in the component templates of other NgModules
			- imports -- Other modules whose exported classes are need by component templates in this NgModule
			- providers -- creators of services that this NgModule contributes to the global collection of services; they become accessible in all parts of the app. You can specify providers at the component level which is often preferred
			- bootstrap -- the main application view, called the root component, which hosts all other app views. ONly the root NgModule should set the bootstrap property.
	- components	
		- 