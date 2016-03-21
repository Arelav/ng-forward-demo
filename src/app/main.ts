import '../styles';

// polyfills
import 'es6-shim';
import 'reflect-metadata';

import 'angular';
import 'angular-ui-router';
import {bootstrap}    from 'ng-forward';
import {AppComponent} from './app.component.ts';

bootstrap(AppComponent);
