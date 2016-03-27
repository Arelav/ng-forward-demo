import './app.styles'

import {Component, Injectable, Inject, EventEmitter, Input, Output, bootstrap} from 'ng-forward';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';


@Inject(HeroService)

@Component({
  selector: 'my-app',
  template: require('./app.template'),
  inputs: ['hero'],
  directives: [HeroDetailComponent],
  providers: [HeroService]
})

export class AppComponent {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private _heroService: HeroService) {}

  getHeroes() {
    this.heroes = this._heroService.getHeroes();
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) { this.selectedHero = hero; }
}
