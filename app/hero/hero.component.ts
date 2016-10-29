import { Component, OnInit } from '@angular/core';
import { Logger } from "angular2-logger/core"; 

import { Hero } from '../hero/hero.model';

@Component({
    moduleId: module.id,
    selector: 'hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent implements OnInit {

    hero: Hero;
    
    constructor(private _logger: Logger) { 
        this._logger.info('initializing a hero object...');
        this.hero = new Hero();
        this.hero.id = 10;
        this.hero.name = 'Haytham';
    }

    ngOnInit() { }
}