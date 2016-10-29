import { NgModule }      from '@angular/core';

import {Logger} from "angular2-logger/core";
import {HeroComponent} from "./hero.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports:      [ FormsModule ],
    declarations: [ HeroComponent ],
    exports: [ HeroComponent ],
    providers: [ Logger ]
})
export class HeroModule {}