import angular from 'angular';
import angularMeteor from 'angular-meteor';

import templateUrl from './addTag.html';

class TagAdd {
    constructor($scope, $reactive, $filter) {
        'ngInject';

        $reactive(this).attach($scope);
        var that = this;
        this.$filter = $filter;

        this.subscribe('campaigns');

        this.options = ["red", "blue", "green"]; // replace with campaign tags
        this.toggleTag = toggleTag;
        this.hasTag = hasTag;

        /////////////////////////////

        function toggleTag(tag) {
            if(this.hasTag(tag)){
                this.tags.splice(this.tags.indexOf(tag), 1);
            } else {
                this.tags.push(tag);
            }
        }

        function hasTag(tag) {
            if(this.tags.indexOf(tag) === -1){
                return false;
            }

            return true;
        }
    }
}

const name = 'tagAdd';

export default angular.module(name, [
        angularMeteor
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: TagAdd,
        bindings: {
            tags: '='
        }
    })