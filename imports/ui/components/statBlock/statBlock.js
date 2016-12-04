import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './statBlock.html';

import { Campaigns } from '../../../api/campaigns';

class StatBlock {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);
    }
}

const name = 'statBlock';

export default angular.module(name, [
        angularMeteor
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: StatBlock,
        bindings: {
            selectedNpc: '<',
            selectedC: '<'
        }
    })