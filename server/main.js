import { Meteor } from 'meteor/meteor';
import { Tester } from '../collections/tester';

Meteor.startup(() => {
    if(Tester.find().count() === 0){
        const b = [{
            'name': 'alex',
            'description': 'is a nice guy'
        },{
            'name': 'jiyong',
            'description': 'is a nice girl'
        }];

        b.forEach((thing) => {
            Tester.insert(thing);
        })
    }
});