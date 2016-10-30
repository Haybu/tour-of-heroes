import { Component, OnInit } from '@angular/core';
import { Logger } from "angular2-logger/core";
import {Router} from "@angular/router";

import { Hero } from './/hero.model';
import {HeroesService} from "./heroes.service";

@Component({
    moduleId: module.id,
    selector: 'heroes-list',
    templateUrl: 'heroes-list.component.html'
})
export class HeroesListComponent implements OnInit {

    heroList: Hero[];
    
    constructor(private _logger: Logger
        , private heroesService: HeroesService
        , private route: Router) {
        this._logger.info('initializing a heroes object...');
    }

    ngOnInit() {
        this.heroesService.getAllHeros().then(hl => this.heroList = hl);
    }

    gotoDetail(hero: Hero) : void {
        let link = ['/detail', hero.id];
        this.route.navigate(link);
    }

}