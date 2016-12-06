import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Meteor } from 'meteor/meteor';
import templateUrl from './listCampaigns.html';

// components
import { name as CampaignAdd } from '../campaignAdd/addCampaign';

// collections
import { Campaigns } from '../../../api/campaigns';

class CampaignsList {
    constructor($scope, $reactive, $state, $meteor) {
        'ngInject';

        $reactive(this).attach($scope);
        const that = this;

        this.$state = $state;
        this.toggleCampaign = toggleCampaign;

        Meteor.subscribe('campaigns', () => {
            this.selectedC = Campaigns.findOne({_id: $state.params.cId});
            init();
            $scope.$apply();
        });

        this.helpers({
            campaigns() {
                return Campaigns.find({});
            }
        });

        function init(){

        }

        function toggleCampaign(campaign){
            that.selectedC = campaign;

            if(campaign){
                that.$state.go('campaign', {"cId": campaign._id});
            }
        }
    }
}

const name = 'campaignsList';

export default angular.module(name, [
        angularMeteor,
        uiRouter,
        CampaignAdd
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: CampaignsList
    })