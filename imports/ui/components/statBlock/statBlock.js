import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './statBlock.html';

import { name as AttackBlockList } from '../attackBlockList/listAttackBlocks';

import { Campaigns } from '../../../api/campaigns';

class StatBlock {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);
    }

    meleeAttacks() {
        return this.selectedNpc.stats.attacks.melee;
    }

    rangedAttacks() {
        return this.selectedNpc.stats.attacks.ranged;
    }

    touchAttacks() {
        return this.selectedNpc.stats.attacks.touch;
    }

    //spells()
}

const name = 'statBlock';

export default angular.module(name, [
        angularMeteor,
        AttackBlockList
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: StatBlock,
        bindings: {
            selectedNpc: '=',
            selectedC: '<'
        }
    })