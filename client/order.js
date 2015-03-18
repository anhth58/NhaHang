Template.order.events({
    'focus input': function(event) {
        event.target.select();
    },
    'submit #numberCallForm': function(event) {
        event.preventDefault();
     	document.getElementById("number" + this._id).blur();
    },
    'change .numberCall': function(event) {
   		value = event.target.value;
   		if (value == "") return;
   		for (var i = 0; i < value.length; i++) {
   			if (value[i] < '0' || value[i] > '9') return
   		}
        moneyObj = document.getElementById("money" + this._id);
        totalObj = document.getElementById("total");
        oldMoney = parseInt(moneyObj.innerHTML * 100);
        newMoney = parseInt(value) * this.price;
        moneyObj.innerHTML = (newMoney / 100).toFixed(2);
        totalObj.innerHTML = ((parseInt(totalObj.innerHTML * 100) + newMoney - oldMoney) / 100).toFixed(2);
    },
    'click #submitOrder': function(event) {
        total = document.getElementById("total");
        if (total.innerHTML == 0) {
            alert("Please choose something before Order!");
            return;
        }
        if (!confirm("Are you sure?")) return;
        var orderdishes = [];
        dishes = Dishes.find().fetch();
        for (var i = 0; i < dishes.length; i++) {
            number = document.getElementById("number" + dishes[i]._id);
            money = document.getElementById("money" + dishes[i]._id);
            if (parseInt(number.value) > 0) {
                orderdishes.push({number: parseInt(number.value), money: money.innerHTML, name: dishes[i].name});
            }
            number.value = 0;
            money.innerHTML = "0.00";
        }
        Meteor.call('insertOrder', orderdishes, total.innerHTML);
        total.innerHTML = "0.00";
    }
});
