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
var router_1 = require("@angular/router");
var heroes_service_1 = require("./heroes.service");
var common_1 = require('@angular/common');
var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroesService, route, router, location) {
        this.heroesService = heroesService;
        this.route = route;
        this.router = router;
        this.location = location;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.heroesService.getHero(id)
                .then(function (hero) { return _this.selectedHero = hero; });
        });
    };
    HeroDetailComponent.prototype.onSelect = function (hero) {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.heroesService.getHero(id)
                .then(function (hero) { return _this.selectedHero = hero; });
        });
    };
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    HeroDetailComponent.prototype.edit = function (hero) {
        var link = ['/edit', hero.id];
        this.router.navigate(link);
    };
    HeroDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hero-detail',
            templateUrl: 'hero-detail.component.html'
        }), 
        __metadata('design:paramtypes', [heroes_service_1.HeroesService, router_1.ActivatedRoute, router_1.Router, common_1.Location])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map