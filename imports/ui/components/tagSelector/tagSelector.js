import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './tagSelector.html';

class TagSelector {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);
        var that = this;

        this.subscribe('campaigns');

        this.tags = ["none", "red", "blue", "green"]; // replace with campaign tags
        this.selectTag = selectTag;

        /////////////////////////////

        function selectTag(tag){
            this.tag = tag;
        }
    }
}

const name = 'tagSelector';

export default angular.module(name, [
        angularMeteor
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: TagSelector,
        bindings: {
            tag: '='
        }
    })