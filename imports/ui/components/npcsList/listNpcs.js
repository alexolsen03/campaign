import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './listNpcs.html';

//components
// import { name as CampaignAdd } from '../campaignAdd/addCampaign';
// collections
import { Campaigns } from '../../../api/campaigns';

class NpcsList {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);
        var that = this;

        this.subscribe('campaign', () => [
            this.selectedC._id
        ]);

        console.log(this.selectedC);

        this.helpers({
            campaign() {
                return Campaigns.findOne({
                    _id: this.getReactively('selectedC', true)._id || []
                });
            }
        })
    }
}

const name = 'npcsList';

export default angular.module(name, [
        angularMeteor
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: NpcsList,
        bindings: {
            selectedC: '<'
        }
    })