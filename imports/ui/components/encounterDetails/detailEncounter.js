import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './detailEncounter.html';

//components
import { name as CampaignAdd } from '../campaignAdd/addCampaign';

import { Campaigns } from '../../../api/campaigns';

class EncounterDetails {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.save = save;
        this.activeTab = 0;
        this.focused = false;
        this.addNpc = addNpc;
        this.toggleFocused = toggleFocused;

        function save(){
           let index = this.selectedC.encounters.map(function(enc){ return enc.id}).indexOf(this.selectedEnc.id);

//            the following removes the $$hashkey property

            console.log(index);

           this.selectedEnc = angular.toJson(this.selectedEnc);
           this.selectedEnc = angular.fromJson(this.selectedEnc);

           this.selectedC.encounters[index] = this.selectedEnc;
           Meteor.call('updateEncounter', this.selectedC._id, this.selectedC.encounters[index]);
        }

        function addNpc(npc){
            if(npc){
                console.log('adding', npc);
                if(!this.selectedEnc.npcs){
                    this.selectedEnc.npcs = [];
                }
                this.selectedEnc.npcs.push(npc);
                this.save();
            }else{
                console.log('couldnt add encounter npc...');
            }
        }

        function toggleFocused(){
            return this.focused = !this.focused;
        }
    }
}

const name = 'encounterDetails';

export default angular.module(name, [
        angularMeteor,
        CampaignAdd
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: EncounterDetails,
        bindings: {
            selectedEnc: '<',
            selectedC: '<'
        }
    })