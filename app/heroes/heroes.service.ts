import { Injectable } from '@angular/core';
import {Hero} from "./hero.model";

@Injectable()
export class HeroesService {

     heros: Hero[] = [
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' },
        { id: 17, name: 'Dynama' },
        { id: 18, name: 'Dr IQ' },
        { id: 19, name: 'Magma' },
        { id: 20, name: 'Tornado' }
    ];

    constructor() { }

    public add (hero: Hero) {
        this.heros.push(hero);
    }

    public getHero(id: number): Promise<Hero> {
        return this.getAllHeros()
            .then(heroes => heroes.find(hero => hero.id === id));
    }

    public getAllHeros(): Promise<Hero[]> {
        return Promise.resolve(this.heros);
    }

}