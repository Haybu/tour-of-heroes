import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import {Logger} from "angular2-logger/core";
import {HeroesListComponent} from "./heros-list.component";
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroEditComponent} from "./hero.edit.component";

@NgModule({
    imports:      [ FormsModule, CommonModule ],
    declarations: [ HeroesListComponent, HeroDetailComponent, HeroEditComponent ],
    exports: [ HeroesListComponent, HeroDetailComponent, HeroEditComponent ],
    providers: [ Logger ]
})
export class HeroesModule {}