import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './linkList.html';

import { Campaigns } from '../../../api/campaigns';

class LinkList {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);
    }

    addLink(){
        console.log('add ', this.link);
        this.list.push(this.link);
        this.link = {};
    }

    removeLink(link){
        console.log('remove ', link);
    }

}

const name = 'linkList';

export default angular.module(name, [
        angularMeteor
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: LinkList,
        bindings: {
            list: "="
        }
    })