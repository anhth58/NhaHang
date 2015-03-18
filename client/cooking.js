
Template.cooking.helpers({
    'order': function() {
        return Orders.find();
    },
});
Template.cooking.events({
    'click #deleteOrder': function() {
        Meteor.call('removeOrder', this._id);
    }
});
