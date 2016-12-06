import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './listEncounters.html';

import { name as AddEncounter } from '../encounterAdd/addEncounter';

//components
// import { name as CampaignAdd } from '../campaignAdd/addCampaign';
// collections
import { Campaigns } from '../../../api/campaigns';

class EncountersList {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);
        var that = this;

        this.subscribe('campaign', () => [
            this.selectedC._id
        ]);

        console.log(this.selectedC);

        this.helpers({
            campaign() {
                return Campaigns.findOne({
                    _id: this.getReactively('selectedC', true)._id || []
                });
            }
        });

        this.selectEnc = selectEnc;
        this.destroyEnc = destroyEnc;

        function selectEnc(enc){
            console.log('toggling selected enc');

            this.selectedEnc = enc;
 //           this.onSelectedEncChange({$event: {selectedEnc: this.selectedEnc}});
        }

        function destroyEnc(enc){
//            Campaigns.update({_id: this.selectedC._id}, {$pull: {npcs: { "id": npc.id}}});
        }
    }
}

const name = 'encountersList';

export default angular.module(name, [
        angularMeteor,
        AddEncounter
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: EncountersList,
        bindings: {
            selectedC: '<',
            onSelectedEncChange: '&',
            selectedEnc: '<'
        }
    })