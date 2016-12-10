import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './addEncounter.html';

import { Campaigns } from '../../../api/campaigns';

class EncounterAdd {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);
    }

    submitEnc() {
        this.enc.owner = Meteor.userId();
        this.enc.id = Date.now();
        this.enc.npcs = [];

        Campaigns.update({_id: this.selectedC._id}, {$push: {encounters: this.enc}});

        this.reset();
    }

    reset() {
        this.enc = {};
    }
}

const name = 'encounterAdd';

export default angular.module(name, [
        angularMeteor
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: EncounterAdd,
        bindings: {
            selectedC: '<'
        }
    })