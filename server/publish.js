
Meteor.publish('dishesList', function() {
    return Dishes.find({createBy: this.userId});
});
Meteor.publish('ordersList', function() {
    return Orders.find({createBy: this.userId});
});
