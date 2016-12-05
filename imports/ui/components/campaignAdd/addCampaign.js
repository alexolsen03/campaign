import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './addCampaign.html';

import { Campaigns } from '../../../api/campaigns';

class CampaignAdd {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.subscribe('campaigns');
    }

    submitCampaign() {
        this.campaign.owner = Meteor.userId();
        Campaigns.insert(this.campaign);
        this.reset();
    }

    reset() {
        this.campaign = {};
    }
}

const name = 'campaignAdd';

export default angular.module(name, [
        angularMeteor
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: CampaignAdd
    })