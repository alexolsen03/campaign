import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import 'bootstrap/dist/css/bootstrap.css';

// collections
import { Tester } from '../collections/tester';

angular.module('campaign', [
    angularMeteor,
    uiRouter,
    'accounts.ui'
])
.controller('MainCtrl', function($scope, $reactive){
    'ngInject';

    $reactive(this).attach($scope);

    this.isUser = Meteor.userId() ? true : false;

    this.helpers({
        b() {
            return Tester.find({});
        }
    })
});