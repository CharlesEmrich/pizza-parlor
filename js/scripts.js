//// Business Logic ////
function Pizza (size, toppings) {
  this.size     = size;
  this.toppings = [];
  this.price    = 0;
}

function Topping (name, delta, image) {
  this.name  = name;
  this.delta = delta;
  this.image = image;
}

var toppings = [[],
]

var sizes = [["Small (10\") 8.99", "sm"], ["Medium (12\") 10.99","md"], ["Large (14\") 12.99", "lg"]];
//// User Interface Logic ////
$(function() {
  for (var i = 0; i < sizes.length; i++) {
    $("#sizes").append(
      "<div class='radio'>" +
        "<label>" +
          "<input type='radio' value='" + sizes[i][1] + "'>" +
          sizes[i][0] +
        "</label>" +
      "</div>"
    );
  }

  $("form").change(function() {

  });
});


//SIzes: sm 10", md 12", lg 14",
//CHOOSE TOPPINGS
// CHOOSE MEATS
//
//  Pepperoni
//  Sliced Italian Sausage
//  Philly Steak
//  Bacon
//  Premium Chicken
//  Italian Sausage
//  Beef
//  Ham
//  Salami
// CHOOSE NON-MEATS
//
//  Cheddar Cheese
//  Shredded Parmesan Asiago
//  Banana Peppers
//  Green Peppers
//  Mushrooms
//  Onions
//  Spinach
//  Hot Sauce
//  Feta Cheese
//  Shredded Provolone Cheese
//  Black Olives
//  Jalapeno Peppers
//  Pineapple
//  Roasted Red Peppers
//  Diced Tomatoes
