import { Component, OnInit } from '@angular/core';
import {Hero} from "../heroes/hero.model";
import {HeroesService} from "../heroes/heroes.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(private heroesService: HeroesService,
                private route: Router) { }

    ngOnInit() {
        this.heroesService.getAllHeros()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero) : void {
        let link = ['/detail', hero.id];
        this.route.navigate(link);
    }

}