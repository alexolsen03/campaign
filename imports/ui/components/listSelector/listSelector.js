import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './listSelector.html';

//components
import { name as ListItemAdd } from '../listItemAdd/listItemAdd';
import { name as ListFilter } from '../listFilter/listFilter';

// collections
import { Campaigns } from '../../../api/campaigns';

class ListSelector {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);
        var that = this;

        this.selectItem = selectItem;
        this.destroyItem = destroyItem;
        this.innerAddItem = innerAddItem;
        this.isActive = isActive;
        this.customFilter = customFilter;
        this.tag = 'none';
        this.filter = '';

        this.subscribe('campaigns');

        /////////////////////////////////////////////////////////

        function selectItem(item){
            this.selectedItem = item;
            this.onSelectedItemChange({$event: {selectedItem: this.selectedItem}});
        }

        function innerAddItem(item){
            this.addFunction({item: item});
        }

        function destroyItem(item){
            console.log('destroy ', item);
            this.destroyFunction({item: item});
        }

        function isActive(item){
            if(!this.showFocus){
                return false;
            }

            if(item && this.selectedItem){
                return item.id === this.selectedItem.id;
            }

            return false;
        }

        function customFilter(){
            return function(item){
                if(!item.name){
                    return false;
                }

                if(item.name.toLowerCase().indexOf(that.filter.toLowerCase()) === -1 &&
                    that.filter.length > 0){
                    return false;
                }

                if(that.tag !== 'none'){

                    if(item.tags.indexOf(that.tag) === -1){
 //                   if(item.tag !== that.tag){
                        return false;
                    }
                }

                return true;
            }
        }
    }
}

const name = 'listSelector';

export default angular.module(name, [
        angularMeteor,
        ListItemAdd,
        ListFilter
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: ListSelector,
        bindings: {
            selectedC: '<',
            list: '=',
            onSelectedItemChange: '&',
            addFunction: '&',
            destroyFunction: '&',
            showFocus: '<'
        }
    })