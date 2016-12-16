import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './detailNpc.html';

import { name as StatBlock } from '../statBlock/statBlock';
import { name as TagSelector } from '../tagSelector/tagSelector';

import { Campaigns } from '../../../api/campaigns';
import { Pregens } from '../../../api/pregens';

class NpcDetails {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);
        let that = this;

        this.subscribe('pregens');

        this.activeTab = 0;
        this.populate  = populate;

        this.helpers({
            pregen() {
                return Pregens.findOne({});
            },
            pregens() {
                return Pregens.find({});
            }
        })

        //////////////////////////////

        function populate(pregen){
            console.log(pregen);

            if(pregen){
                Object.keys(pregen).forEach(function(key) {
                    if(key !== '_id' && key !== 'name'){
                        console.log('setting ', key);
                        if(key === 'links'){
                            if(!that.selectedNpc[key]){
                                that.selectedNpc[key] = [];
                            }
                            that.selectedNpc[key].push(pregen[key][0]);
                        }else{
                            that.selectedNpc[key] = pregen[key];
                        }
                    }
                });

                console.log(that.selectedNpc);
            }
        }
    }
}

const name = 'npcDetails';

export default angular.module(name, [
        angularMeteor,
        StatBlock,
        TagSelector
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: NpcDetails,
        bindings: {
            selectedNpc: '=',
            selectedC: '<',
            readOnly: '<'
        }
    })