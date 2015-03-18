
Meteor.subscribe('dishesList');
Meteor.subscribe('ordersList');
Handlebars.registerHelper('thisId', function() {
    return this._id;
});
Handlebars.registerHelper('price', function() {
    return (this.price / 100).toFixed(2);
});
Handlebars.registerHelper('dish', function() {
    return Dishes.find();
});
