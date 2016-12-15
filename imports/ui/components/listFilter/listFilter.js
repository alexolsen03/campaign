import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './listFilter.html';

import { name as TagSelector } from '../tagSelector/tagSelector';

class ListFilter {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);
        var that = this;

        this.selectItem = selectItem;
        this.selectTag = selectTag;

        this.subscribe('campaigns');

        /////////////////////////////

        function selectItem(item){
            this.selectedItem = item;
        }

        function selectTag(tag){
            this.tag = tag;
        }

    }
}

const name = 'listFilter';

export default angular.module(name, [
        angularMeteor,
        TagSelector
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: ListFilter,
        bindings: {
            list: '<',
            filter: '=',
            tag: '='
        }
    })