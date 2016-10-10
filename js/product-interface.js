var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#mult-form').submit(function(event) {
    event.preventDefault();
    var mult1 = parseInt($('#mult1').val());
    var mult2 = parseInt($('#mult2').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.multiplication(mult1, mult2);
    $('#product').append("<li>" + output + "</li>");
  });
});
