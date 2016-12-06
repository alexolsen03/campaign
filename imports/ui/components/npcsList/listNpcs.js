import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import templateUrl from './listNpcs.html';

//components
// import { name as CampaignAdd } from '../campaignAdd/addCampaign';
// collections
import { Campaigns } from '../../../api/campaigns';

class NpcsList {
    constructor($scope, $reactive, $state) {
        'ngInject';

        $reactive(this).attach($scope);
        this.$state = $state;

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

        function selectNpc(npc){
            this.selectedNpc = npc;
            this.onSelectedNpcChange({$event: {selectedNpc: this.selectedNpc}});

            this.$state.go('npcDetails', {"cId": this.selectedC._id, "id": this.selectedNpc.id });
        }

        function destroyNpc(npc){
            Campaigns.update({_id: this.selectedC._id}, {$pull: {npcs: { "id": npc.id}}});
        }
    }
}

const name = 'npcsList';

export default angular.module(name, [
        angularMeteor,
        uiRouter
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