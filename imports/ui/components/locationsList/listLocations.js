import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './listLocations.html';

import { name as AddLocation } from '../locationAdd/addLocation';

//components
// import { name as CampaignAdd } from '../campaignAdd/addCampaign';
// collections
import { Campaigns } from '../../../api/campaigns';

class LocationsList {
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
        });

        this.selectLoc = selectLoc;
        this.destroyLoc = destroyLoc;

        function selectLoc(loc){
            this.selectedLoc = loc;
            this.onSelectedLocChange({$event: {selectedLoc: this.selectedLoc}});
        }

        function destroyLoc(loc){
            Campaigns.update({_id: this.selectedC._id}, {$pull: {locations: { "id": loc.id}}});
        }
    }
}

const name = 'locationsList';

export default angular.module(name, [
        angularMeteor,
        AddLocation
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: LocationsList,
        bindings: {
            selectedC: '<',
            onSelectedLocChange: '&',
            selectedLoc: '<'
        }
    })