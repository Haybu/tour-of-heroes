import { Component, OnInit } from '@angular/core';
import { Hero } from "./hero.model";
import { Params, ActivatedRoute} from "@angular/router";
import {HeroesService} from "./heroes.service";
import { Location }    from '@angular/common';

@Component({
    moduleId: module.id,
    selector: 'hero-edit',
    templateUrl: 'hero.edit.component.html',
    styleUrls: [ 'hero.detail.component.css' ]
})
export class HeroEditComponent implements OnInit {

    selectedHero: Hero;

    constructor(private route: ActivatedRoute
        , private heroesService: HeroesService
        , private location: Location) { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroesService.getHero(id)
                .then(hero => this.selectedHero = hero);
        });
    }

    goBack(): void {
        this.location.back();
    }

    update(hero: Hero) {
        this.heroesService.update(hero);
    }

    delete(hero: Hero) {
        this.heroesService.delete(hero.id);
    }

}