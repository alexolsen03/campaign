import { Mongo } from 'meteor/mongo';

export const Campaigns = new Mongo.Collection('campaigns');

Campaigns.allow({
    insert(userId, campaign) {
        campaign.npcs = [];
        campaign.locations = [];
        campaign.encounters = [];

        return userId && campaign.owner === userId;
    },
    update(userId, campaign, fields, modifier) {
        return userId && campaign.owner === userId;
    },
    remove(userId, campaign) {
        return userId && campaign.owner === userId;
    }
});

/*

{
    cName: '',
    owner: '',  // Meteor.userId()
    npcs: []
}




*/