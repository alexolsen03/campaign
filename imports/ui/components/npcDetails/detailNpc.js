import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './detailNpc.html';

import { name as StatBlock } from '../statBlock/statBlock';
import { name as TagSelector } from '../tagSelector/tagSelector';

import { Campaigns } from '../../../api/campaigns';

class NpcDetails {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.activeTab = 0;
    }
}

const name = 'npcDetails';

export default angular.module(name, [
        angularMeteor,
        StatBlock,
        TagSelector
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: NpcDetails,
        bindings: {
            selectedNpc: '=',
            selectedC: '<',
            readOnly: '<'
        }
    })