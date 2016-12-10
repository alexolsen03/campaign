import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './listSelector.html';

//components
import { name as ListItemAdd } from '../listItemAdd/listItemAdd';

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

        this.subscribe('campaigns', () => [
            this.selectedC._id
        ]);

        this.helpers({
            campaign() {
                return Campaigns.findOne({
                    _id: this.getReactively('selectedC', true)._id || []
                });
            }
        });

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
                if(item._id){   // is a campaign object
                    return item._id === this.selectedItem._id;
                }else{
                    return item.id === this.selectedItem.id;
                }
            }

            return false;
        }
    }
}

const name = 'listSelector';

export default angular.module(name, [
        angularMeteor,
        ListItemAdd
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