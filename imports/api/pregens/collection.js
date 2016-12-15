import { Mongo } from 'meteor/mongo';

export const Pregens = new Mongo.Collection('pregens');

Pregens.allow({
    insert(userId, pregen) {
        return true;
    },
    // update(userId, campaign, fields, modifier) {
    //     return userId && campaign.owner === userId;
    // },
    // remove(userId, campaign) {
    //     return userId && campaign.owner === userId;
    // }
});
