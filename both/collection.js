import { Mongo } from 'meteor/mongo';

Messages = new Mongo.Collection('messages');

Messages.allow({
    insert: () => true,
    update: () => true,
    remove: () => true,
});