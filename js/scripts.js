//// Business Logic ////
function Parlor (sizes, toppings) {
  this.sizes    = sizes;
  this.toppings = toppings;
}
function Pizza (size, toppings) {
  this.size     = size;
  this.toppings = [];
  this.price    = 0;
}
Pizza.prototype.calcPrice = function () {
  var result = 0;
  result += this.size.delta;
  this.toppings.forEach(function(topping) {
    result += parseFloat(topping.delta);
  });
  this.price = result;
  return result;
};

function Topping (name, delta, id, image) {
  this.name  = name;
  this.delta = delta;
  this.id    = id;
  this.image = image;
}

function Size (name, delta, id) {
  this.name  = name;
  this.delta = delta;
  this.id    = id;
}

var toppings = [["Pepperoni", "2.00", "pepperoni", ""],
                ["Sliced Italian Sausage", "2.00", "sliced-italian-sausage", ""],
                ["Philly Steak", "2.50", "philly-steak", ""],
                ["Bacon", "1.50", "bacon", ""],
                ["Premium Chicken", "2.00", "premium-chicken", ""],
                ["Ham", "2.00", "ham", ""],
                ["Cheddar Cheese", "1.50", "cheddar-cheese", ""],
                ["Banana Peppers", "1.00", "banana-peppers", ""],
                ["Mushrooms", "1.00", "mushrooms", ""],
                ["Onions", "0.50", "onions", ""],
                ["Spinach", "1.00", "spinach", ""],
                ["Black Olives", "1.00", "black-olives", ""],
                ["Diced Tomatoes", "0.50", "diced-tomatoes", ""]
];
var sizes = [["Small (10\")", 8.99, "sm"], ["Medium (12\")", 10.99,"md"], ["Large (14\")", 12.99, "lg"]];
var ourParlor = new Parlor([], []);

for (var i = 0; i < toppings.length; i++) {
  var newTopping = new Topping (toppings[i][0], toppings[i][1], toppings[i][2], toppings[i][3]);
  ourParlor.toppings.push(newTopping);
}
for (var i = 0; i < sizes.length; i++) {
  var newSize = new Size (sizes[i][0], sizes[i][1], sizes[i][2]);
  ourParlor.sizes.push(newSize);
}

//// User Interface Logic ////
$(function() {
  for (var i = 0; i < ourParlor.sizes.length; i++) {
    $("#sizes").append(
      "<div class='radio'>" +
        "<label>" +
          "<input type='radio' name='size' value='" + ourParlor.sizes[i].id + "'>" +
          ourParlor.sizes[i].name + " $" + ourParlor.sizes[i].delta +
        "</label>" +
      "</div>"
    );
    // $("#sizes input").last().click(function() {
    //   console.log($(this));
    // });
  }
  for (var i = 0; i < ourParlor.toppings.length; i++) {
    $("#toppings").append(
      "<div class='checkbox'>" +
        "<label>" +
          "<input type='checkbox' value='" + ourParlor.toppings[i].id + "'>" +
          ourParlor.toppings[i].name + " $" + ourParlor.toppings[i].delta +
        "</label>" +
      "</div>"
    );
    // $("#toppings input").last().click(function() {
    //   console.log($(this));
    // });
  }

  var ourPizza = new Pizza();
  $("form").change(function() {
    //Set pizzas properties to current form state:
    ourPizza.size = $("#sizes input:checked").val();
    ourPizza.toppings = [];
    $("#toppings input:checked").each(function(idx, topping) {
      ourPizza.toppings.push(topping.value);
    });
    //Translate those values back into objects:
    ourPizza.size = $.grep(ourParlor.sizes, function(e){ return e.id === ourPizza.size})[0];
    ourPizza.toppings = ourPizza.toppings.map(function(topping) {
      return $.grep(ourParlor.toppings, function(e){ return e.id === topping})[0];
    });
    //If pizza has a calculable price, calulatePrice and display price:
    if (ourPizza.size !== "undefined") {
      $("#output h3#price").text(ourPizza.calcPrice().toFixed(2));
      $("#output ul").empty();
      ourPizza.toppings.forEach(function(topping) {
        $("#output ul").append("<li>" + topping.name + "</li>");
      });
    }
    console.log(ourPizza);
  });
});
