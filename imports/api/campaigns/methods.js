import { Meteor } from 'meteor/meteor';
import { Campaigns } from './collection';

export function updateNpc(cId, npc){
    console.log('updating ' + cId + ' ' + npc.id);
    Campaigns.update(   {$and: [{_id: cId,
                                                "npcs.id": npc.id}]},
                                                {$set: { 'npcs.$': npc }});
}

Meteor.methods({
    updateNpc
});