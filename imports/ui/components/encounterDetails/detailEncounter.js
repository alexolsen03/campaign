import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './detailEncounter.html';

//components
import { name as CampaignAdd } from '../campaignAdd/addCampaign';

import { Campaigns } from '../../../api/campaigns';

class EncounterDetails {
    constructor($scope, $reactive, $filter) {
        'ngInject';

        $reactive(this).attach($scope);
        var that = this;

        this.save = save;
        this.activeTab = 0;
        this.focused = false;
        this.addNpc = addNpc;
        this.destroyNpc = destroyNpc;
        this.toggleFocused = toggleFocused;
        this.filterNpcs = filterNpcs;
        this.searchText = "";


        function save(){
           let index = this.selectedC.encounters.map(function(enc){ return enc.id}).indexOf(this.selectedEnc.id);

//            the following removes the $$hashkey property
           this.selectedEnc = angular.toJson(this.selectedEnc);
           this.selectedEnc = angular.fromJson(this.selectedEnc);

           this.selectedC.encounters[index] = this.selectedEnc;
           Meteor.call('updateEncounter', this.selectedC._id, this.selectedC.encounters[index]);
        }

        function addNpc(npc) {
            if(npc){
                console.log('adding', npc);
                if(!this.selectedEnc.npcs){
                    this.selectedEnc.npcs = [];
                }
                this.selectedEnc.npcs.push(npc);
                this.save();

                this.toggleFocused();
            }else{
                console.log('couldnt add encounter npc...');
            }
        }

        function destroyNpc(npc) {
            if(npc){
                this.selectedEnc.npcs = $filter('filter')(this.selectedEnc.npcs, function(v,i){
                    return v.id !== npc.id;
                }, true);

                this.save();
            } else {
                console.log('no npc to destroy...');
            }
        }

        function toggleFocused(){
            return this.focused = !this.focused;
        }

        function filterNpcs(){
            return function(item){
                if(!item.name){
                    return false;
                }

                if(item.name.toLowerCase().indexOf(that.searchText.toLowerCase()) === -1 &&
                    that.searchText.length > 0){
                    return false;
                }

                if(getNpcIds().indexOf(item.id) !== -1){
                    return false;
                }else{
                    return true;
                }
            }
        }

        function getNpcIds(){
            let array = [];
            if(that.selectedEnc){
                that.selectedEnc.npcs.forEach(npc => {
                    array.push(npc.id);
                });
            }else{
                console.log('no selected encounter yo');
            }
            return array;
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