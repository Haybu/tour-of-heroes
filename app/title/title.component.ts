import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-title',
    templateUrl: 'title.component.html'
})
export class TitleComponent implements OnInit {

    title = 'Tour of Heroes';    

    constructor() {          
    }

    ngOnInit() { }
}