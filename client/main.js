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

import { name as LocationsList } from '../imports/ui/components/locationsList/listLocations';
import { name as LocationDetail } from '../imports/ui/components/locationDetails/detailLocation';

import { name as ListSelector } from '../imports/ui/components/listSelector/listSelector';
import { name as Register } from '../imports/ui/components/register/register';

// collections
import { Campaigns } from '../imports/api/campaigns';

class Main {
    constructor($scope, $reactive, $meteor, data) {
        'ngInject';

        $reactive(this).attach($scope);
        var that = this;

        $meteor.subscribe('campaigns');
        this.subscribe('campaigns');

        this.campaign = data.campaign;
        this.npcSave = npcSave;
        this.resetDependents = resetDependents;

        this.addCampaign = addCampaign;
        this.destroyCampaign = destroyCampaign;
        this.addNpc = addNpc;
        this.destroyNpc = destroyNpc;
        this.addEnc = addEnc;
        this.destroyEnc = destroyEnc;
        this.addLoc = addLoc;
        this.destroyLoc = destroyLoc;


        this.saves = {
            "npc": this.npcSave
        }

        this.helpers({
            campaigns() {
                return Campaigns.find({});
            },
            campaign() {
                return Campaigns.findOne({_id: this.campaign._id})
            }
        });

        function addCampaign(item){
            Campaigns.insert(item);
        }

        function destroyCampaign(item){
            Campaigns.remove({_id: item._id});
        }

        function addNpc(item){
            item.owner = Meteor.userId();
            item.id = Date.now();
            item.stats = {};
            item.links = [];
            item.tags = [];

            Campaigns.update({_id: this.campaign._id}, {$push: {npcs: item}});
        }

        function destroyNpc(item){
            Campaigns.update({_id: this.campaign._id}, {$pull: {npcs: { "id": item.id}}});
        }

        function addEnc(item){
            item.owner = Meteor.userId();
            item.id = Date.now();
            item.npcs = [];
            item.links = [];
            item.tags = [];

            Campaigns.update({_id: this.campaign._id}, {$push: {encounters: item}});
        }

        function destroyEnc(item){
            Campaigns.update({_id: this.campaign._id}, {$pull: {encounters: { "id": item.id}}});
        }

        function addLoc(item){
            item.owner = Meteor.userId();
            item.id = Date.now();
            item.links = [];
            item.encounters = [];
            item.tags = [];
            Campaigns.update({_id: this.campaign._id}, {$push: {locations: item}});
        }

        function destroyLoc(item){
            Campaigns.update({_id: this.campaign._id}, {$pull: {locations: { "id": item.id}}});
        }

        function resetDependents(){
            this.selectedNpc = null;
            this.selectedEnc = null;
            this.selectedLoc = null;
        }

        function npcSave(){
            let index = that.campaign.npcs.map(function(npc){ return npc.id}).indexOf(that.selectedNpc.id);

            // the following removes the $$hashkey property
            that.selectedNpc = angular.toJson(that.selectedNpc);
            that.selectedNpc = angular.fromJson(that.selectedNpc);

            that.campaign.npcs[index] = that.selectedNpc;

            Meteor.call('updateNpc', that.campaign._id, that.campaign.npcs[index]);
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
        EncountersDetail,
        LocationsList,
        LocationDetail,
        ListSelector,
        Register
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: Main
    }).config(config);

function config($stateProvider) {
  'ngInject';

  $stateProvider.state('campaign', {
    url: '/:userId/campaign/:id',
    templateUrl,
    controllerAs: name,
    controller: Main,
    resolve: {
      data: function($q, $state, $timeout, $stateParams) {
        var deferred = $q.defer();
        console.log($stateParams);

        if(Meteor.userId() === null) {
            $timeout(function() {
                $state.go('login');
                deferred.reject();
            });
        }else {
            Meteor.subscribe('campaigns', () => {
                console.log('subscribed!');
                console.log(Campaigns.findOne({_id: $stateParams.id}));
                var campaign = Campaigns.findOne({_id: $stateParams.id});
                deferred.resolve({campaign: campaign});
            });
        }

        return deferred.promise;
      }
    }
  });
}