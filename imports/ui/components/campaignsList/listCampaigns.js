import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './listCampaigns.html';

//components
import { name as CampaignAdd } from '../campaignAdd/addCampaign';
// collections
import { Campaigns } from '../../../api/campaigns';

class CampaignsList {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.helpers({
            campaigns() {
                return Campaigns.find({});
            }
        });

        this.toggleCampaign = toggleCampaign;

        function toggleCampaign(campaign){
            console.log('toggling selected');
            this.selected = campaign;
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
        controller: CampaignsList
    })