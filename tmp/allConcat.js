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

var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

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

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

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
