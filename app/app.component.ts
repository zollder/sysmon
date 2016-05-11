/*
	Implements an application shell.
	Responsible for handling navigation/routing only.
*/
import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<nav>
			<a [routerLink]="['Dashboard']">Dashboard</a>
			<a [routerLink]="['Heroes']">Heroes</a>
		</nav>
		<router-outlet></router-outlet>
	`,
	styleUrls: ['app/css/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	/*
		Registers a HeroService provider.
		Injects data service using Dependency Injector, makes it available to every component tree child.
		The HeroDetailComponent must not repeat its parent's providers array.
		There should be only one instance of the HeroService in our entire app.
		Otherwise, a new service instance will shadow the parent instance.
	*/
	providers: [ROUTER_PROVIDERS, HeroService]
})

@RouteConfig([
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: DashboardComponent,
		useAsDefault: true
	},
	{
		path: '/detail/:id',
		name: 'HeroDetail',
		component: HeroDetailComponent
	},
	{
		path: '/heroes',
		name: 'Heroes',
		component: HeroesComponent
	}
])

export class AppComponent {
	title = 'Tour of Heroes';
}