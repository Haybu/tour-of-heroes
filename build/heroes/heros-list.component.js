"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var core_2 = require("angular2-logger/core");
var router_1 = require("@angular/router");
var heroes_service_1 = require("./heroes.service");
var HeroesListComponent = (function () {
    function HeroesListComponent(_logger, heroesService, route) {
        this._logger = _logger;
        this.heroesService = heroesService;
        this.route = route;
        this._logger.info('initializing a heroes object...');
    }
    HeroesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroesService.getAllHeros().then(function (hl) { return _this.heroList = hl; });
    };
    HeroesListComponent.prototype.gotoDetail = function (hero) {
        var link = ['/detail', hero.id];
        this.route.navigate(link);
    };
    HeroesListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'heroes-list',
            templateUrl: 'heroes-list.component.html'
        }), 
        __metadata('design:paramtypes', [core_2.Logger, heroes_service_1.HeroesService, router_1.Router])
    ], HeroesListComponent);
    return HeroesListComponent;
}());
exports.HeroesListComponent = HeroesListComponent;
//# sourceMappingURL=heros-list.component.js.map