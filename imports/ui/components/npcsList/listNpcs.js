import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './listNpcs.html';

//components
import { name as CampaignAdd } from '../campaignAdd/addCampaign';
// collections
import { Campaigns } from '../../../api/campaigns';

class NpcsList {
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

        this.selectNpc = selectNpc;
        this.destroyNpc = destroyNpc;
        this.addNpc = addNpc;

        function selectNpc(npc){
            console.log('toggling selected npc');

            this.selectedNpc = npc;
            this.onSelectedNpcChange({$event: {selectedNpc: this.selectedNpc}});
        }

        function destroyNpc(npc){
            Campaigns.update({_id: this.selectedC._id}, {$pull: {npcs: { "id": npc.id}}});
        }

        function addNpc(npc){
            console.log('adding npc from listNpc');
            console.log(npc);
            Campaigns.update({_id: this.selectedC._id}, {$push: {npcs: npc}});
        }
    }
}

const name = 'npcsList';

export default angular.module(name, [
        angularMeteor,
        CampaignAdd
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: NpcsList,
        bindings: {
            selectedC: '<',
            onSelectedNpcChange: '&',
            selectedNpc: '<'
        }
    })