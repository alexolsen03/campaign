import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './main.html';

// components
import { name as Navigation } from '../imports/ui/components/navigation/navigation';

import { name as CampaignsList } from '../imports/ui/components/campaignsList/listCampaigns';

import { name as NpcsList } from '../imports/ui/components/npcsList/listNpcs';
import { name as NpcDetails } from '../imports/ui/components/npcDetails/detailNpc';
import { name as NpcAdd } from '../imports/ui/components/npcAdd/addNpc';

import { name as EncountersList } from '../imports/ui/components/encountersList/listEncounters';
import { name as EncountersDetail } from '../imports/ui/components/encounterDetails/detailEncounter';

class Main {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);
        var that = this;

        this.selectedC = {};
        this.npcSave = npcSave;

        this.saves = {
            "npc": this.npcSave
        }

        function npcSave(){
            let index = that.selectedC.npcs.map(function(npc){ return npc.id}).indexOf(that.selectedNpc.id);

            // the following removes the $$hashkey property
            that.selectedNpc = angular.toJson(that.selectedNpc);
            that.selectedNpc = angular.fromJson(that.selectedNpc);

            that.selectedC.npcs[index] = that.selectedNpc;

            Meteor.call('updateNpc', that.selectedC._id, that.selectedC.npcs[index]);
        }
    }
}

const name = 'main';

export default angular.module(name, [
        angularMeteor,
        Navigation,
        CampaignsList,
        NpcsList,
        NpcDetails,
        NpcAdd,
        EncountersList,
        EncountersDetail
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: Main
    })