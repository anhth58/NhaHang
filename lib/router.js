Router.configure({
   	layoutTemplate: 'layout'
});
Router.map(function() {
	this.route('home', {path: '/'});
	this.route('menu', {
		path: '/menu',
	});
	this.route('order', {
		path: '/order'
	});
	this.route('cooking', {
		path: 'cooking'
	});
    this.route('/login', {
        path: 'login'
    });
    this.route('/register', {
        path: 'register'
    });
});
