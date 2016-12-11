import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './detailLocation.html';

import { Campaigns } from '../../../api/campaigns';

class LocationDetails {
    constructor($scope, $reactive, $filter) {
        'ngInject';

        $reactive(this).attach($scope);
        var that = this;
    }
}

const name = 'locationDetails';

export default angular.module(name, [
        angularMeteor
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: LocationDetails,
        bindings: {
            selectedLoc: '<',
            selectedC: '<'
        }
    })