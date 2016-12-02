import angular from 'angular';
import angularMeteor from 'angular-meteor';
import templateUrl from './navigation.html';

class Navigation {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.isUser = Meteor.userId() ? true : false;
  }
}

let name = 'navigation'

export default angular.module(name, [
    angularMeteor
]).component(name, {
    templateUrl,
    controllerAs: name,
    controller: Navigation
});