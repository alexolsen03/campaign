import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './listFilter.html';

class ListFilter {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);
        var that = this;

        this.focused = false;
        this.selectItem = selectItem;
        this.toggleFocused = toggleFocused;

        this.subscribe('campaigns');

        function selectItem(item){
            this.selectedItem = item;
//            this.onSelectedItemClick({$event: {selectedItem: this.selectedItem}});
        }

        function toggleFocused(){
            console.log('toggling');
            this.focused = !this.focused;
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
            onSelectedItemClick: '&',
        }
    })