import { Injectable } from 'angular2/core';

import { Hero } from './hero';
import { herodata } from './mock-heroes';

@Injectable()
export class HeroService {
	/*
		Fetches heroes data asynchronously, as a promise.
		Currently, resolves a promise immediately, since the data is mocked.
	*/
	getHeroes() {
		return Promise.resolve(herodata);
	}

	/*
		Fetches heroes data asynchronously, as a promise.
		Simulates poor connection by introducing 2 sec timeout.
	*/
	getHeroesSlowly() {
		return new Promise<Hero[]>(resolve => setTimeout(()=>resolve(herodata), 2000));
	}

	/*
		Fetches hero by ID asynchronously, as a promise.
	*/
	getHero(id: number) {
		return Promise.resolve(herodata)
		.then(heroes => heroes.filter(hero => hero.id === id)[0]);
	}
}