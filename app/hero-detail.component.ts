import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-hero-detail',
	templateUrl: 'app/template/hero-detail.component.html',
	styleUrls: ['app/css/hero-detail.component.css']
})

/*
	The HeroDetailComponent must not repeat its parent's providers array.
	There should be only one instance of the HeroService in our entire app.
*/
export class HeroDetailComponent implements OnInit {
	@Input() hero: Hero;	// allows to accept input property from parent

	/* Injects service and route params into the constructor. */
	constructor(private _heroService: HeroService, private _routeParams: RouteParams) {}

	/* Extracts ID from route params and fetches hero by extracted ID. */
	ngOnInit() {
		// convert string ID to number with JS's "+" operator
		let id = +this._routeParams.get('id');
		// fetch hero by ID
		this._heroService.getHero(id).then(hero => this.hero = hero);
	}

	/* Navigates backward one step in the browser's history stack. */
	goBack() {
		window.history.back();
	}
}