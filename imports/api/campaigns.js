import { Mongo } from 'meteor/mongo';

export const Campaigns = new Mongo.Collection('campaigns');

Campaigns.allow({
    insert(userId, campaign) {
        return userId && campaign.owner === userId;
    },
    update(userId, campaign, fields, modifier) {
        return userId && campaign.owner === userId;
    },
    remove(userId, campaign) {
        return userId && campaign.owner === userId;
    }
})