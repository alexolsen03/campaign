import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './addNpc.html';

import { Campaigns } from '../../../api/campaigns';

class NpcAdd {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);
    }

    submitNpc() {
        this.npc.owner = Meteor.userId();
        this.npc.id = Date.now();
        this.npc.stats = {};

        Campaigns.update({_id: this.selectedC._id}, {$push: {npcs: this.npc}});

        this.reset();
    }

    reset() {
        this.npc = {};
    }
}

const name = 'npcAdd';

export default angular.module(name, [
        angularMeteor
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: NpcAdd,
        bindings: {
            selectedC: '<'
        }
    })