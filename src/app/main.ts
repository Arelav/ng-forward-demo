import '../styles';

// polyfills
import 'es6-shim';
import 'reflect-metadata';

import 'angular';
import 'angular-ui-router';
import './app.config'
import {bootstrap}    from 'ng-forward';
import {AppComponent} from './app.component';

bootstrap(AppComponent, ['ui.router', 'app.config']);
