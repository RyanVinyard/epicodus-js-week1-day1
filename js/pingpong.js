function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

Calculator.prototype.addition = function(summand1, summand2) {
  var output = 0;
  output = summand1 + summand2;

  return output;

};

Calculator.prototype.subtraction = function (subtractor1, subtractor2) {
  var output = 0;
  output = subtractor1 - subtractor2;

  return output;
};

Calculator.prototype.multiplication = function (mult1, mult2) {
  var output = 0;
  output = mult1 * mult2;

  return output;
};

Calculator.prototype.division = function (divis1, divis2) {
  var output = 0;
  output = divis1 / divis2;

  return output;
}


exports.calculatorModule = Calculator;
