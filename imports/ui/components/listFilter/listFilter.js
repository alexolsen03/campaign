import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './listFilter.html';

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
            this.selectedTag = tag;
        }

    }
}

const name = 'listFilter';

export default angular.module(name, [
        angularMeteor
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: ListFilter,
        bindings: {
            list: '<',
            filter: '=',
            tags: '='
        }
    })