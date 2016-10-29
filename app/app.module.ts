import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Logger } from "angular2-logger/core"; 

import { AppComponent } from './app.component'
import { TitleComponent } from './title/title.component'
import {HeroModule} from "./hero/hero.module";

@NgModule({
  imports:      [ BrowserModule, HeroModule ],
  declarations: [ AppComponent, TitleComponent ],
  providers: [ Logger ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }