import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './listItemAdd.html';

import { Campaigns } from '../../../api/campaigns';

class ListItemAdd {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);
    }

    submitItem() {
        this.item.owner = Meteor.userId();
        this.item.id = Date.now();

        console.log('submitting', this.item);

        this.addFunction({item: this.item});

        this.reset();
    }

    reset() {
        this.item = {};
    }
}

const name = 'listItemAdd';

export default angular.module(name, [
        angularMeteor
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: ListItemAdd,
        bindings: {
            selectedC: '<',
            addFunction: '&'
        }
    })