import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './addAttackBlock.html';

import { Campaigns } from '../../../api/campaigns';

class AttackBlockAdd {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);
    }

    submitAttack() {
        this.attack.owner = Meteor.userId();
        this.attack.id = Date.now();

        this.new
    }
}

const name = 'attackBlockAdd';

export default angular.module(name, [
        angularMeteor
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: AttackBlockAdd,
        bindings: {
            newAttack: '<',
            onAddNewAttack: '&'
        }
    })