import {Component, Injectable, Inject, EventEmitter, Input, Output, bootstrap} from 'ng-forward';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';

@Component({
  selector: 'my-heroes',
  template: require('./heroes.tpl'),
  inputs: ['hero'],
  directives: [HeroDetailComponent],
})

export class HeroesComponent {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  // constructor(private _heroService: HeroService) {}

  // getHeroes() {
  //   this.heroes = this._heroService.getHeroes();
  // }

  // ngOnInit() {
  //   this.getHeroes();
  // }

  onSelect(hero: Hero) { this.selectedHero = hero; }
}

