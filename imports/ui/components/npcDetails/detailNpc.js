import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './detailNpc.html';

import { Campaigns } from '../../../api/campaigns';

class NpcDetails {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);
    }

    submitNpcDetails() {
        this.details.owner = Meteor.userId();

        this.reset();
    }

    reset() {
        this.details = {};
    }
}

const name = 'npcDetails';

export default angular.module(name, [
        angularMeteor
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: NpcDetails,
        bindings: {
            selectedNpc: '<'
        }
    })