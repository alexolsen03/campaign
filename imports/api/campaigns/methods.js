import { Meteor } from 'meteor/meteor';
import { Campaigns } from './collection';

export function updateNpc(cId, npc){
    console.log('updating ' + cId + ' ' + npc.id);
    Campaigns.update(   {$and: [{_id: cId,
                                                "npcs.id": npc.id}]},
                                                {$set: { 'npcs.$': npc }});
}

export function updateEncounter(cId, enc){
    console.log('updating' + cId + ' ' + enc.id);
    Campaigns.update(   {$and: [{_id: cId,
                                                "encounters.id": enc.id}]},
                                                {$set: { 'encounters.$': enc }});
}

Meteor.methods({
    updateNpc,
    updateEncounter
});