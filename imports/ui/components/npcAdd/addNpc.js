import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './addNpc.html';

class NpcAdd {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);
    }

    submitNpc() {
        this.npc.owner = Meteor.userId();

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
        controller: NpcAdd
    })