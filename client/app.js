import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.css';
import uiBootstrap from 'angular-ui-bootstrap';

import { name as main } from './main';

angular.module('campaign', [
    angularMeteor,
    uiRouter,
    uiBootstrap,
    'accounts.ui',
    main
]);