import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './detailCampaign.html';

import { Campaigns } from '../../../api/campaigns';

class CampaignDetails {
    constructor($scope, $reactive, $rootScope, $filter) {
        'ngInject';

        $reactive(this).attach($scope);
        var that = this;

        $rootScope.classy = '';

        console.log('loading campaign details');
    }
}

const name = 'campaignDetails';

export default angular.module(name, [
        angularMeteor
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: CampaignDetails
    }).config(config);

function config($stateProvider) {
  'ngInject';

  $stateProvider.state('campaigns', {
    url: '/:userId/campaigns',
    templateUrl,
    controllerAs: name,
    controller: CampaignDetails
    // resolve: {
    //   currentUser($q) {
    //     if (Meteor.userId() === null) {
    //       return $q.reject('AUTH_REQUIRED');
    //     } else {
    //       return $q.resolve();
    //     }
    //   }
    // }
  });
}