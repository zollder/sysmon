import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: 'app/template/dashboard.component.html',
	styleUrls: ['app/css/dashboard.component.css']
})

export class DashboardComponent implements OnInit {

	heroes: Hero[] = [];

	/* inject HeroService (defined in the top level AppComponent) and hold it in a private field. */
	constructor(private _router: Router, private _heroService: HeroService) {}

	/* Initializes dashboard heroes. Cherry-pick 4 heroes with slice.*/
	ngOnInit() {
		this._heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
	}

	gotoDetail(hero: Hero) {
		let link = ['HeroDetail', { id: hero.id }];
			this._router.navigate(link);
	}
}
