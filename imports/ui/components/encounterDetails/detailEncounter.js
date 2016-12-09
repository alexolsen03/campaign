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
        this.selectedNpc = null;
        this.selectedEnc = this.selectedEnc;
        this.addNpc = addNpc;
        this.destroyNpc = destroyNpc;
        this.toggleFocused = toggleFocused;
        this.filterNpcs = filterNpcs;
        this.searchText = "";
        this.selectNpc = selectNpc;

        function save(){
           let index = this.selectedC.encounters.map(function(enc){ return enc.id}).indexOf(this.selectedEnc.id);

           console.log(this.selectedEnc.npcs);

//            the following removes the $$hashkey property
           this.selectedEnc = angular.toJson(this.selectedEnc);
           this.selectedEnc = angular.fromJson(this.selectedEnc);

           // this.selectedEnc.npcs.forEach(npc => {
           //      if(npc.)
           // })

           this.selectedC.encounters[index] = this.selectedEnc;
           Meteor.call('updateEncounter', this.selectedC._id, this.selectedC.encounters[index]);
        }

        function addNpc(npc, fromCampaign) {
            if(npc){
                console.log('adding', npc);
                if(!this.selectedEnc.npcs){
                    this.selectedEnc.npcs = [];
                }

                // i don't want to duplicate data, so i am just adding a
                // reference here to the id of the npc from the campaign
                if(fromCampaign){
                    npc = {
                        id: npc.id,
                        name: npc.name,
                        fromCampaign: true
                    }
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

        function selectNpc(npc){
            if(npc.fromCampaign){
                this.selectedC.npcs.forEach(cNpc => {
                    if(cNpc.id === npc.id){
                        npc = cNpc;
                        this.fromCampaign = true;
                    }
                });
            }else{
                this.fromCampaign = false;
            }

            this.selectedNpc = npc;
            this.ok = true;
        }

        function getNpcFromList(list){
            let npc = list.filter(function(npc){
                if(npc.id === this.selectedNpc.id){
                    return true;
                }
            })[0];

            return npc;
        }

        // function encNpcSave(selectedNpc){
        //     console.log('receiving', selectedNpc);
        //     let index = this.selectedC.npcs.map(function(npc){ return npc.id}).indexOf(selectedNpc.id);

        //     // the following removes the $$hashkey property
        //     selectedNpc = angular.toJson(selectedNpc);
        //     selectedNpc = angular.fromJson(selectedNpc);

        //     this.selectedC.npcs[index] = selectedNpc;

        //     Meteor.call('updateNpc', this.selectedC._id, selectedC.npcs[index]);
        // }

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