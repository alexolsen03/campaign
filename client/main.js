import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './main.html';

// components
import { name as Navigation } from '../imports/ui/components/navigation/navigation';
import { name as CampaignsList } from '../imports/ui/components/campaignsList/listCampaigns';
import { name as NpcsList } from '../imports/ui/components/npcsList/listNpcs';
import { name as NpcAdd } from '../imports/ui/components/npcAdd/addNpc';
import { name as NpcDetails } from '../imports/ui/components/npcDetails/detailNpc';

class Main {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.selectedC = {};
    }
}

const name = 'main';

export default angular.module(name, [
        angularMeteor,
        Navigation,
        CampaignsList,
        NpcsList,
        NpcAdd,
        NpcDetails
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: Main
    })