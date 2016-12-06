import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';
import uiRouter from 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.css';
import uiBootstrap from 'angular-ui-bootstrap';

import { Campaigns } from '../imports/api/campaigns';

import { name as main } from './main';

angular.module('campaign', [
    angularMeteor,
    uiRouter,
    uiBootstrap,
    'accounts.ui',
    main
])

    .config(config);


function config($locationProvider, $urlRouterProvider, $stateProvider){
    'ngInject';

    $stateProvider
        .state('main', {
          url: '/',
          template: "<div>umm..</div>"
        });

    // $stateProvider
    //     .state('npcDetails', {
    //       url: '/campaign/:cId/npcs/:id',
    //       template: "<npc-details></npc-details>"
    //     });

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('main');
}