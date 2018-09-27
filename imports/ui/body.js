

import {Template} from 'meteor/templating';
import  Items  from '../api/items';
import './item.js';
import './body.html';


Template.body.helpers({
    //hello: 'Hi World'
    items(){  
    return Items.find({});
    },
    loggedIn(){
        return Meteor.userId();
    }
});

Template.body.events({
    'click .test'(event) {
        console.log('Hello');
        
    },
    'submit .new-items'(event) {
        event.preventDefault();
        console.log(event.target.item1.value);
        //allows us to get a server method by name
        Meteor.call('createNewItem', event.target.item1.value, 
        event.target.item2.value)
        event.target.item2.value = '';
        event.target.item1.value = '';
    }
});
//: function(event) { }
