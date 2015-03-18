Template.register.events({
    'blur #regName': function(event) {
        name = event.target.value;
        error = document.getElementById("regError");
        if (name.length < 6) {
            valid = false;
        }
        else valid = (name.charAt(0) != '_') && (name.charAt(name.length - 1) != '_');
        for (i = 1 ; i < name.length; i++) {
            c = name.charAt(i);
            if ((c < 'a' || c > 'z') && c != '_' && (c > '9' || c < '0')) valid = false;
        }
        Session.set('regName', valid? "valid" : "invalid");
        if (!valid) error.innerHTML = "Invalid Username";
        if (name == "") error.innerHTML = "Username is required";
        if (valid) {
            error.innerHTML = "";
            if (Session.get('regPass') == "invalid") {
                document.getElementById('regPass').focus();
                document.getElementById('regPass').blur();
            }
            if (Session.get('regConfirm') == "invalid") {
                document.getElementById('regConfirm').focus();
                document.getElementById('regConfirm').blur();
            }
        }
    },
    'change #regPass': function() {
        Session.set('regConfirm', "");
        document.getElementById('regConfirm').value = "";
    },
    'blur #regPass': function(event) {
        pass = event.target.value;
        error = document.getElementById("regError");
        valid = (pass.length >= 8);
        Session.set('regPass', valid? "valid" : "invalid");
        if (!valid) error.innerHTML = "Invalid Password";
        if (pass == "") error.innerHTML = "Password is required";
        if (valid) {
            error.innerHTML = "";
            if (Session.get('regName') == "invalid") {
                document.getElementById('regName').focus();
                document.getElementById('regName').blur();
            }
        }
    },
    'focus #regConfirm': function(event) {
        if (Session.get('regPass') != "valid") {
            document.getElementById('regPass').focus();
        }
    },
    'blur #regConfirm': function(event) {
        if (Session.get('regPass') == "valid") {
            pass = document.getElementById("regPass").value;
            error = document.getElementById("regError");
            confirm = event.target.value;
            Session.set('regConfirm', pass == confirm? "valid" : "invalid");
            if (pass != confirm) error.innerHTML = "Password Confirm is not correct";
            if (confirm == "") error.innerHTML = "Password Confirm is required";
            if (confirm == pass) {
                error.innerHTML = "";
                if (Session.get('regName') == "invalid") {
                    document.getElementById('regName').focus();
                    document.getElementById('regName').blur();
                }
            }
        }
    },
    'submit form': function(event) {
        event.preventDefault();
        if (Session.get('regName') != "valid") {
            document.getElementById('regName').focus();
            return;
        }
        if (Session.get('regPass') != "valid") {
            document.getElementById('regPass').focus();
            return;
        }
        if (Session.get('regConfirm') != "valid") {
            document.getElementById('regConfirm').focus();
            return;
        }
        Accounts.createUser(
            {   username: document.getElementById('regName').value, 
                password: document.getElementById('regPass').value
            },
            function(error) {
                if (error) {
                    if (error.error == 403) {
                        Session.set('regName', "");
                        document.getElementById('regName').focus();
                    }
                    document.getElementById('regError').innerHTML = error.reason;
                }
                else {
                    Router.go('menu');
                }
            }
        );
    }
});
Template.register.rendered = function() {
    $('[data-toggle = "popover"]').popover();
    Session.set('regName', "");
    Session.set('regPass', "");
    Session.set('regConfirm', "");
}
Template.register.helpers({
    'isValid': function(field) {    
        return Session.get(field) == "valid";
    },
    'isInvalid': function(field) {
        return Session.get(field) == "invalid";
    }
});
