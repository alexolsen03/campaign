import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './listCampaigns.html';

// components
import { name as CampaignAdd } from '../campaignAdd/addCampaign';

// collections
import { Campaigns } from '../../../api/campaigns';

class CampaignsList {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.subscribe('campaigns');

        this.helpers({
            campaigns() {
                return Campaigns.find({});
            }
        });

        this.toggleCampaign = toggleCampaign;

        function toggleCampaign(campaign){
            console.log('toggling selected');

            this.selectedC = campaign;
            this.selectedNpc = undefined;

            this.onSelectedCChange({$event: {selectedC: this.selectedC, selectedNpc: undefined}})
        }
    }
}

const name = 'campaignsList';

export default angular.module(name, [
        angularMeteor,
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