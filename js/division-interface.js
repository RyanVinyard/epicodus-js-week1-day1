var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#divis-form').submit(function(event) {
    event.preventDefault();
    var mult1 = parseInt($('#divis1').val());
    var mult2 = parseInt($('#divis2').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.division(mult1, mult2);
    $('#divisor').append("<li>" + output + "</li>");
  });
});
