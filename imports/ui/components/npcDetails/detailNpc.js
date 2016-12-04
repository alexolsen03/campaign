import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './detailNpc.html';

import { name as StatBlock } from '../statBlock/statBlock';

import { Campaigns } from '../../../api/campaigns';

class NpcDetails {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.save = save;
        this.activeTab = 0;

        function save(){
            let index = this.selectedC.npcs.map(function(npc){ return npc.id}).indexOf(this.selectedNpc.id);

            // the following removes the $$hashkey property
            this.selectedNpc = angular.toJson(this.selectedNpc);
            this.selectedNpc = angular.fromJson(this.selectedNpc);

            this.selectedC.npcs[index] = this.selectedNpc;



            Meteor.call('updateNpc', this.selectedC._id, this.selectedC.npcs[index]);
        }
    }
}

const name = 'npcDetails';

export default angular.module(name, [
        angularMeteor,
        StatBlock
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: NpcDetails,
        bindings: {
            selectedNpc: '<',
            selectedC: '<'
        }
    })