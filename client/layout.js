Template.layout.helpers({
	'activeBar': function(bar) {
		var currentRouter = Router.current();
		if (currentRouter.lookupTemplate() == bar) return 'active';
	}
});
Template.layout.events({
    'click #logoutButton': function() {
        Meteor.logout();
    }
});
