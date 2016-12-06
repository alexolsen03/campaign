import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Meteor } from 'meteor/meteor';
import templateUrl from './listNpcs.html';

//components
// import { name as CampaignAdd } from '../campaignAdd/addCampaign';
// collections
import { Campaigns } from '../../../api/campaigns';

class NpcsList {
    constructor($scope, $reactive, $state) {
        'ngInject';

        $reactive(this).attach($scope);
        const that = this;

        this.$state = $state;
        this.selectNpc = selectNpc;
        this.destroyNpc = destroyNpc;

        Meteor.subscribe('campaigns', () => {
            this.selectedC = Campaigns.findOne({
                    _id: $state.params.cId
            });
            init();
            $scope.$apply();
        });

        function init(){
            if($state.params.id){
                that.selectedC.npcs.forEach(npc => {
                    if(npc.id === parseInt($state.params.id)){
                        that.selectedNpc = npc;
                    }
                });
            }
        }

        function selectNpc(npc){
            this.selectedNpc = npc;

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
        controller: NpcsList
    })