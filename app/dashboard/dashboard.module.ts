import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import {Logger} from "angular2-logger/core";
import {DashboardComponent} from "./dashboard-component";


@NgModule({
    imports:      [CommonModule ],
    declarations: [ DashboardComponent ],
    exports: [ DashboardComponent ],
    providers: [ Logger ]
})
export class DashboardModule {}