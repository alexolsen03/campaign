import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Meteor } from 'meteor/meteor';
import uiRouter from 'angular-ui-router';

import templateUrl from './detailNpc.html';

import { name as StatBlock } from '../statBlock/statBlock';

import { Campaigns } from '../../../api/campaigns';

class NpcDetails {
    constructor($scope, $reactive, $state, $meteor) {
        'ngInject';

        $reactive(this).attach($scope);

        const that = this;
        this.save = save;
        this.activeTab = 0;

        Meteor.subscribe('campaigns', function(){
            console.log('initing!');
            that.selectedC = Campaigns.findOne({_id: $state.params.cId});
            init();
            $scope.$apply();
        });

        function init(){
            let cId = $state.params.cId;
            let npcId = $state.params.id;

            that.selectedC.npcs.forEach(npc => {
                if(npc.id === parseInt(npcId)){
                    that.selectedNpc = npc;
                }
            });
        }


        function save(){
            let index = that.selectedC.npcs.map(function(npc){ return npc.id}).indexOf(that.selectedNpc.id);

            // the following removes the $$hashkey property
            that.selectedNpc = angular.toJson(that.selectedNpc);
            that.selectedNpc = angular.fromJson(that.selectedNpc);

            that.selectedC.npcs[index] = that.selectedNpc;

            Meteor.call('updateNpc', that.selectedC._id, that.selectedC.npcs[index]);
        }
    }
}

const name = 'npcDetails';

export default angular.module(name, [
        angularMeteor,
        uiRouter,
        StatBlock
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: NpcDetails
    })

    .config(config);

function config($stateProvider) {
  'ngInject';
  $stateProvider
    .state('npcDetails', {
      url: '/campaign/:cId/npc/:id',
      template: "<npc-details></npc-details>",
    });
}