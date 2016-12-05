import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './listAttackBlocks.html';

import { name as AttackBlockAdd } from '../attackBlockAdd/addAttackBlock';

//components
// import { name as CampaignAdd } from '../campaignAdd/addCampaign';
// collections
import { Campaigns } from '../../../api/campaigns';

class AttackBlocksList {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);
        var that = this;

 //        this.subscribe('campaign', () => [
 //            this.selectedC._id
 //        ]);

        this.destroyAttackBlock = destroyAttackBlock;

        function destroyAttackBlock(block){
            // Campaigns.update({_id: this.selectedC._id}, {$pull: {npcs: { "id": npc.id}}});
        }
    }
}

const name = 'attackBlocksList';

export default angular.module(name, [
        angularMeteor,
        AttackBlockAdd
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: AttackBlocksList,
        bindings: {
            selectedC: '<',
            onSelectedNpcChange: '&',
            selectedNpc: '<'
        }
    })