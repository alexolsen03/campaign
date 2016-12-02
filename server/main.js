import { Meteor } from 'meteor/meteor';
import { Campaign } from '../imports/api/campaigns';

Meteor.startup(() => {
    // if(Campaign.find().count() === 0){
    //     const b = [{
    //         'name': 'alex',
    //         'description': 'is a nice guy'
    //     },{
    //         'name': 'jiyong',
    //         'description': 'is a nice girl'
    //     }];

    //     b.forEach((thing) => {
    //         Tester.insert(thing);
    //     })
    // }
});