import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './addLocation.html';

import { Campaigns } from '../../../api/campaigns';

class LocationAdd {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);
    }

    submitLoc() {
        this.loc.owner = Meteor.userId();
        this.loc.id = Date.now();
        this.loc.encounters = [];

        Campaigns.update({_id: this.selectedC._id}, {$push: {locations: this.loc}});

        this.reset();
    }

    reset() {
        this.loc = {};
    }
}

const name = 'locationAdd';

export default angular.module(name, [
        angularMeteor
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: LocationAdd,
        bindings: {
            selectedC: '<'
        }
    })