Template.login.events({
    'submit form': function(event) {
        event.preventDefault();
        name = event.target.username.value;
        pass = event.target.password.value;
        loginError = document.getElementById("loginError");
        if (name == "") {
            loginError.innerHTML = "Username is required"
            return;
        }
        if (pass == "") {
            loginError.innerHTML = "Passsword is required";
            return;
        }
        Meteor.loginWithPassword(name, pass, function(error) {
            if (error) {
                loginError.innerHTML = error.reason;
            }
            else {
                Router.go('menu');
            }
        });
    }
});
Template.login.rendered = function() {
    document.getElementById('loginName').focus();
}