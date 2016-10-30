import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {HeroesService} from "./heroes.service";
import { Location }    from '@angular/common';

import {Hero} from "./hero.model";

@Component({
    moduleId: module.id,
    selector: 'hero-detail',
    templateUrl: 'hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {

    selectedHero: Hero;

    constructor(private heroesService: HeroesService,
                private route: ActivatedRoute,
                private router: Router,
                private location: Location) {

    }

    ngOnInit():void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroesService.getHero(id)
                .then(hero => this.selectedHero = hero);
        });
    }

    onSelect(hero: Hero) : void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroesService.getHero(id)
                .then(hero => this.selectedHero = hero);
        });
    }

    goBack(): void {
        this.location.back();
    }

    edit(hero: Hero): void {
        let link = ['/edit', hero.id];
        this.router.navigate(link);
    }

}