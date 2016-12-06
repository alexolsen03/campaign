import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import templateUrl from './listCampaigns.html';

// components
import { name as CampaignAdd } from '../campaignAdd/addCampaign';

// collections
import { Campaigns } from '../../../api/campaigns';

class CampaignsList {
    constructor($scope, $reactive, $state) {
        'ngInject';

        $reactive(this).attach($scope);
        this.$state = $state;

        this.subscribe('campaigns');

        console.log(Campaigns.findOne({_id: $state.params.cId}));

        this.helpers({
            campaigns() {
                return Campaigns.find({});
            }
        });

        this.toggleCampaign = toggleCampaign;

        function toggleCampaign(campaign){
            this.selectedC = campaign;
            this.selectedNpc = undefined;

            this.onSelectedCChange({$event: {selectedC: this.selectedC, selectedNpc: undefined}});

            this.$state.go('main', {"id": this.selectedC._id});
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
        controller: CampaignsList,
        bindings: {
            selectedC: '<',
            selectedNpc: '<',
            onSelectedCChange: '&'
        }
    })