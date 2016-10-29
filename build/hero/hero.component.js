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
var hero_model_1 = require('../hero/hero.model');
var HeroComponent = (function () {
    function HeroComponent(_logger) {
        this._logger = _logger;
        this._logger.info('initializing a hero object...');
        this.hero = new hero_model_1.Hero();
        this.hero.id = 10;
        this.hero.name = 'Haytham';
    }
    HeroComponent.prototype.ngOnInit = function () { };
    HeroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hero',
            templateUrl: 'hero.component.html'
        }), 
        __metadata('design:paramtypes', [core_2.Logger])
    ], HeroComponent);
    return HeroComponent;
}());
exports.HeroComponent = HeroComponent;
//# sourceMappingURL=hero.component.js.map