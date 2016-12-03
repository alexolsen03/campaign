import { Meteor } from 'meteor/meteor';

import { Campaigns } from './collection';

if(Meteor.isServer) {
    Meteor.publish('campaigns', function() {
        const selector = {
            $and: [{
                owner: this.userId
            }, {
                owner: {
                    $exists: true
                }
            }]
        }

        return Campaigns.find(selector);
    });

    Meteor.publish('campaign', function(id) {
        const selector = {
            $and: [{
                _id: id
            }, {
                _id: {
                    $exists: true
                }
            }]
        }

        return Campaigns.find(selector);
    });
}