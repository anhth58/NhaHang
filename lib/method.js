Meteor.methods({		
	'insertDish': function(name, price) {
        if (!Meteor.userId()) throw "must-be-log-in";
        Dishes.insert({
            name: name,
            price: price,
            createBy: Meteor.userId(),
        });
    },
    'removeDish': function(dishId) {
        Dishes.remove(dishId);
    },
    'updateDish': function(dishId, name, price) {
        Dishes.update(dishId, {$set: {name: name, price: price}});
    },
    'insertOrder': function(dishes, totalAmount) {
        if (!Meteor.userId()) throw "must-be-log-in";
        Orders.insert({
            createBy: Meteor.userId(),
            dishes: dishes,
            totalAmount: totalAmount
        });
    },
    'removeOrder': function(orderId) {
        Orders.remove(orderId);
    }
})
