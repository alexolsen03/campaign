import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.css';

import { name as mains } from './main';

angular.module('campaign', [
    angularMeteor,
    uiRouter,
    'accounts.ui',
    mains
]);