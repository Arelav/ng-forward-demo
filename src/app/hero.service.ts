import { Injectable, Inject } from 'ng-forward';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes() {
    return HEROES;
  }
}
