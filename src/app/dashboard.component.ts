import { Component, Inject } from 'ng-forward';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Inject(HeroService)

@Component({
  selector: 'my-dashboard',
  template: require('./dashboard.tpl')
})

export class DashboardComponent {
  heroes: Hero[] = [];
  constructor(private _heroService: HeroService) {}

  ngOnInit() {
    this.heroes = this._heroService.getHeroes();
  }
}

