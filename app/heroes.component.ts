
import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-heroes',
	templateUrl: 'app/template/heroes.component.html',
	styleUrls:  ['app/css/heroes.component.css'],
	// notify angular about the imported (reusable) components, so that it recognizes them
	directives: [ HeroDetailComponent ]
})

export class HeroesComponent implements OnInit {

	heroes: Hero[];
	selectedHero: Hero;

	/*
		Private constructor.
		Defines a private _heroService property and identifies it as a HeroService injection site.
		Now Angular will know to supply an instance of the HeroService when it creates a new AppComponent.
	*/
	constructor(private _router: Router, private _heroService: HeroService) {}

	/*
		Asynchronously returns a collection of heroes from the injected service.
		Passes a callback function as an argument to 'then' method.
		Assignes data to a local variable when the promise is successfully resolved.
	 */
	getHeroes() {
		this._heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	/*
		Implements OnInit's lifecycle hook.
		Fetches and displays a collection of heroes.
	*/
	ngOnInit() {
		this.getHeroes();
	}

	/*
		Sets the selectedHero property to the hero the user clicked.
	*/
	onSelect(hero: Hero) { this.selectedHero = hero; }

	gotoDetail() {
		this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
	}
}