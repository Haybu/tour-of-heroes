import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component'
import { TitleComponent } from './title/title.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [AppComponent, TitleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }