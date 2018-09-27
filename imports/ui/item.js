import './item.html';
import { Template } from 'meteor/templating';
//import  Items from '../api/items';
Template.item.events({
    'click .vote-one'(event){
        //console.log(this._id);
        Meteor.call('voteOnItem', 'itemOne', this._id);
    },
    'click .vote-two'(event){
        //console.log(this._id);
        Meteor.call('voteOnItem', 'itemTwo', this._id);
    }
})

// 'click .vote-one'(event){
//     //console.log(this._id);
//     Items.update(this._id, {
//         $set: {'itemOne.value': this.itemOne.value + 1}
//     } )
// },
// 'click .vote-two'(event){
//     //console.log(this._id);
//     Items.update(this._id, {
//         $set: {'itemTwo.value': this.itemTwo.value + 1}
//     } )
// }