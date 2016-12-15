import { Meteor } from 'meteor/meteor';

import { Pregens } from './collection';

if(Meteor.isServer) {
    Meteor.publish('pregens', function() {
        return Pregens.find({});
    });
}