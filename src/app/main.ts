import '../styles';

// polyfills
import 'es6-shim';
import 'es6-promise'
import 'reflect-metadata';

import 'angular';
import 'angular-ui-router';
import {bootstrap}    from 'ng-forward';
import {AppComponent} from './app.component.ts';

bootstrap(AppComponent);
