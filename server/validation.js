
Accounts.validateNewUser(function (user) { 
    name = user.username;
    if (name.length < 6) throw new Meteor.Error(403, "Username is too short");
    if (name.charAt(0) == '_' || name.charAt(name.length - 1) == '_') throw new Meteor.Error(403, "An underscore in wrong position");
    for (i = 1 ; i < name.length; i++) {
        c = name.charAt(i);
        if ((c < 'a' || c > 'z') && c != '_' && (c > '9' || c < '0')) throw new Meteor.Error(403, "Username contain invalid character");
    }
    return true;
}); 