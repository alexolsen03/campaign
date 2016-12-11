import angular from 'angular';
import angularMeteor from 'angular-meteor';
import templateUrl from './navigation.html';

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

class Navigation {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    Meteor.subscribe('users');

    this.isUser = Meteor.userId() ? true : false;

    this.helpers({
        currentUser() {
            if(!Meteor.user())
                return '';

            let user = Meteor.user();
            return user.emails[0].address.split('@')[0];
        }
    })

  }

  name() {
    if(Meteor.user())
        return Meteor.user().emails[0].split('@')[0];
  }

  logout() {
    Accounts.logout();
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