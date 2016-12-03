// import { Mongo } from 'meteor/mongo';

// export const Npcs = new Mongo.Collection('npcs');

// Npcs.allow({
//     insert(userId, npc) {
//         return userId && npc.owner === userId;
//     },
//     update(userId, npc, fields, modifier) {
//         return userId && npc.owner === userId;
//     },
//     remove(userId, npc) {
//         return userId && npc.owner === userId;
//     }
// })