import { Injectable } from '@angular/core';
import { Hero } from "./hero.model";
import { Headers, Http } from "@angular/http";
import { Logger } from "angular2-logger/core";

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroesService {

    private heroesUrl =  'http://localhost:8080/data/heroes';  //'app/data/heroes.json';

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http, private _logger: Logger) { }

    getAllHeros(): Promise<Hero[]> {
        this._logger.warn('in getAllHeros() method...');
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json() as Hero[])
            .catch(this.handleError);
    }


    public getHero(id: number): Promise<Hero> {
        this._logger.warn('in getHero(number) method...');
        return this.http.get(this.heroesUrl+"/"+id)
            .toPromise()
            .then(response => response.json() as Hero)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        this._logger.warn('in create(string) method...');
        return this.http
            .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json() as Hero)
            .catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero> {
        this._logger.warn('in update(Hero) method...');
        return this.http
            .put(this.heroesUrl, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        this._logger.warn('in delete(Hero) method...');
        return this.http.delete(this.heroesUrl+"/"+id)
            .toPromise()
            .then(res => res.json() as Hero)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}