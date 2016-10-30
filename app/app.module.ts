import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HeroesModule} from "./heroes/heroes.module";
import {DashboardModule} from "./dashboard/dashboard.module";
import {AppRoutingModule} from "./app.routing.module";

import { Logger } from "angular2-logger/core"; 

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import {HeroesService} from "./heroes/heroes.service";




@NgModule({
  imports: [
      BrowserModule,
      HeroesModule,
      DashboardModule,
      AppRoutingModule
  ],
  declarations: [ AppComponent, TitleComponent ],
  providers: [ Logger, HeroesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }