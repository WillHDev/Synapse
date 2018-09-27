import { Meteor } from 'meteor/meteor';
//IMPORTS = not automatically loaded
import {check} from 'meteor/check';
import Items from './items';
Meteor.methods({
    createNewItem(itemOne, itemTwo) {
        check(itemOne, String);
        check(itemTwo, String);
        console.log(itemOne, itemTwo);
        Items.insert({
            itemOne: {
            text: itemOne,
            value:0
        },
        itemTwo: {  
            text: itemTwo,
            value:0
         }});
    },
    voteOnItem(which, id) {
        check(which, String);
        check(id, String);
        if(which === 'itemOne') {
            Items.update(id, {
                $inc: {'itemOne.value':  1}
            } )
        } else { 
        Items.update(id, {
            $inc: {'itemTwo.value':  1}
        } )
    }
    }
    
    
});
//this[which]
//this.itemOne.value
// event.target.item1.value
// event.target.item2.value
//this._id