import './app.styles'

import {Component, Injectable, Inject, EventEmitter, Input, Output, bootstrap} from 'ng-forward';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {HeroDetailComponent} from './hero-detail.component';

@Inject(HeroService)

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ctrl.title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li ng-repeat="hero in ctrl.heroes"
        ng-class="{selected: hero === ctrl.selectedHero}"
        (click)="ctrl.onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <my-hero-detail [(hero)]="ctrl.selectedHero"></my-hero-detail>
  `,
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
