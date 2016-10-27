import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero/hero.model'

@Component({
    moduleId: module.id,
    selector: 'app-title',
    templateUrl: './title.component.html'
})
export class TitleComponent implements OnInit {

    title = 'Tour of Heroes';
    hero: Hero;

    constructor() { 
        this.hero = new Hero();
        this.hero.name = 'Haytham';
    }

    ngOnInit() { }
}