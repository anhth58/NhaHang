Template.menu.events({
    'focus input': function(event) {
        event.target.select();
    },
    'click #deleteDish': function() {
        if (confirm("Are you want to delete this dish?")) {
            Meteor.call('removeDish', this._id);
        }
    },
    'dblclick .name': function(event) {
        event.target.style.display = "none";
        nameChange = document.getElementById("nameChange" + this._id);
        nameChange.type = "text";
        nameChange.focus();
    },
    'dblclick .price': function(event) {
        event.target.style.display = "none";
        document.getElementById("form" + this._id).style.display = "inline";
        priceChange = document.getElementById("priceChange" + this._id);
        priceChange.focus();
    }
});
Template.addDish.events({
    'submit form': function(event) {
        event.preventDefault();
        if (event.target.dishName.value == "") {
            alert("Please fill in the Name field!");
            return;
        }
        if (event.target.dishPrice.value == "") {
            alert("Please fill in the Price field!");
            return;
        }
        Meteor.call('insertDish', event.target.dishName.value, parseInt(event.target.dishPrice.value * 100));
        event.target.dishName.value = "";
        event.target.dishPrice.value = null;
    }
});
Template.nameChangeTemplate.events({
    'submit form': function(event) {
        event.preventDefault();
        event.target.nameChange.type = "hidden";
        if (event.target.nameChange.value == "") return;
        Meteor.call('updateDish', this._id, event.target.nameChange.value, this.price);
    },
    'blur .nameChange': function(event) {
        event.target.type = "hidden";   
        event.target.value = this.name;
        document.getElementById("name" + this._id).style.display = "inline";
    },
    'keyup .nameChange': function(event) {
        if (event.keyCode == 27) event.target.blur();
    }
});
Template.priceChangeTemplate.events({
    'submit form': function(event) {
        event.preventDefault();
        event.target.style.display = "none";
        if (event.target.priceChange.value == "") return;
        Meteor.call('updateDish', this._id, this.name, parseInt(event.target.priceChange.value * 100));
    },
    'blur .priceChange': function(event) {
        document.getElementById("form" + this._id).style.display = "none";   
        event.target.value = this.price / 100;
        document.getElementById("price" + this._id).style.display = "inline";
    },
    'keyup .priceChange': function(event) {
        if (event.keyCode == 27) event.target.blur();
    }
});
