var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#addition-form').submit(function(event) {
    event.preventDefault();
    var summand1 = parseInt($('#summand1').val());
    var summand2 = parseInt($('#summand2').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.addition(summand1, summand2);
    $('#sum').append("<li>" + output + "</li>");
  });
});
