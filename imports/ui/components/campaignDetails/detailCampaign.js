import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './detailCampaign.html';

import { Campaigns } from '../../../api/campaigns';
import { name as ListSelector } from '../listSelector/listSelector';

class CampaignDetails {
    constructor($scope, $reactive, $rootScope, $filter, $state) {
        'ngInject';

        $reactive(this).attach($scope);
        var that = this;
        this.$state = $state;

        this.subscribe('campaigns');
        $rootScope.classy = '';

        this.helpers({
            campaigns() {
                return Campaigns.find({});
            }
        });
    }

    goToCampaign(item){
      console.log('go to', item);
      this.$state.go('campaign', {userId: Meteor.userId(), id: item._id});
    }

    remove(campaign){
      console.log('removing...');
      Campaigns.remove({_id: campaign._id});
    }

    add(){
      this.newC.owner = Meteor.userId();
      console.log('adding...');

      Campaigns.insert(this.newC);
      this.newC = {};
    }
}

const name = 'campaignDetails';

export default angular.module(name, [
        angularMeteor,
        ListSelector
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
    controller: CampaignDetails,
    resolve: {
      data: function($q, $state, $timeout) {
        var deferred = $q.defer();
        $timeout(function() {
          if (Meteor.userId() === null) {
            $state.go('login');
            deferred.reject();
          } else {
            deferred.resolve();
          }
        });

        return deferred.promise;
      }
    }
  });
}