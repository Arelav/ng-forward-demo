import './app.styles'

import {Component, Inject, StateConfig} from 'ng-forward';
import {HeroService} from './hero.service';
import {HeroesComponent} from './heroes.component';

@Inject(HeroService)

@Component({
  selector: 'my-app',
  template: require('./app.template'),
  directives: [HeroesComponent],
  providers: [
    HeroService
  ]
})

@StateConfig([
  {
    url: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  }
])

export class AppComponent {
  title = 'Tour of Heroes'
}
