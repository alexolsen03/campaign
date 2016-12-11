import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.css';
import uiBootstrap from 'angular-ui-bootstrap';

import { name as main } from './main';
import { name as campaign } from '../imports/ui/components/campaignDetails/detailCampaign';


var app = angular.module('campaign', [
    angularMeteor,
    uiRouter,
    uiBootstrap,
    'accounts.ui',
    main,
    campaign
]).config(config);

function config($locationProvider, $urlRouterProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/register');
}