import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import templateUrl from './register.html';
import { Campaigns } from '../../../api/campaigns';
import { Accounts } from 'meteor/accounts-base';

class Register {
    constructor($scope, $reactive, $rootScope) {
        'ngInject';

        $reactive(this).attach($scope);

        $rootScope.classy ="body-login";
    }

}

const name = 'register';

export default angular.module(name, [
        angularMeteor,
        uiRouter
    ]).component(name, {
        templateUrl,
        controllerAs: name,
        controller: Register
    }).config(config);

function config($stateProvider) {
  'ngInject';

  $stateProvider.state('login', {
    url: '/register',
    templateUrl,
    controllerAs: name,
    controller: Register
    // resolve: {
    //   currentUser($q) {
    //     if (Meteor.userId() === null) {
    //       return $q.reject('AUTH_REQUIRED');
    //     } else {
    //       return $q.resolve();
    //     }
    //   }
    // }
  });
}