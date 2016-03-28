import './app.styles'

import {Component, Inject, StateConfig} from 'ng-forward';
import {HeroService} from './hero.service';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';

@Inject(HeroService)

@Component({
  selector: 'my-app',
  template: require('./app.tpl'),
  directives: [],
  providers: [
    HeroService
  ]
})

@StateConfig([
  {
    url: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    url: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent
  }

])

export class AppComponent {
  title = 'Tour of Heroes'
}
