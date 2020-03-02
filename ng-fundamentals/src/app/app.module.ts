import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { AppUnlessDirective } from './directives/appUnless/app-unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    AppUnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
