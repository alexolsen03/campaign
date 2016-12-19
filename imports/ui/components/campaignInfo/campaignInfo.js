import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './campaignInfo.html';

import { Campaigns } from '../../../api/campaigns';

class CampaignInfo {
    constructor($scope, $reactive, $filter) {
        'ngInject';

        $reactive(this).attach($scope);
        var that = this;

        if(!this.campaign.links){
            this.campaign.links = [];
        }
    }
}

const name = 'campaignInfo';

export default angular.module(name, [
        angularMeteor
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: CampaignInfo,
        bindings: {
            campaign: '='
        }
    })