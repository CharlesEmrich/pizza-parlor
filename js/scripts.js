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
  console.log(ourParlor);
  //BUG: For some reason, this creates radio boxes that can all be selected.
  for (var i = 0; i < ourParlor.sizes.length; i++) {
    $("#sizes").append(
      "<div class='radio'>" +
        "<label>" +
          "<input type='radio' value='" + ourParlor.sizes[i].id + "'>" +
          ourParlor.sizes[i].name + " $" + ourParlor.sizes[i].delta +
        "</label>" +
      "</div>"
    );
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
  }

  $("form").change(function() {

  });
});
