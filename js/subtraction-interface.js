var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#subtraction-form').submit(function(event) {
    event.preventDefault();
    var subtractor1 = parseInt($('#subtractor1').val());
    var subtractor2 = parseInt($('#subtractor2').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.subtraction(subtractor1, subtractor2);
    $('#difference').append("<li>" + output + "</li>");
  });
});
