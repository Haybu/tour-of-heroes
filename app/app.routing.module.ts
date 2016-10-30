import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HeroesListComponent} from "./heroes/heros-list.component";
import {HeroDetailComponent} from "./heroes/hero-detail.component";
import {DashboardComponent} from "./dashboard/dashboard-component";
import {HeroEditComponent} from "./heroes/hero.edit.component";



const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'edit/:id', component: HeroEditComponent },
    { path: 'heroes',     component: HeroesListComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}