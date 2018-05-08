function solver(ecuation, x, delta) {
  this.ecuation = ecuation;
  this.solution = "";
  this.x = parseInt(x);
  this.delta = 0.01;

}

//Calcula la ecuación
solver.prototype.calculate = function(ecuation) {

  var xdx = 0;
  xdx = this.x + this.delta;
  var fx = this.evaluateEcuation(this.ecuation, this.x);
  var fxdx = this.evaluateEcuation(this.ecuation, xdx);
  x1 = this.solveIteration(this.x, xdx, fx, fxdx);
  //Hace iteraciones si es necesario
  if (Math.abs(x1 - this.x) >= this.delta) {
    this.x = x1;
    this.calculate(this.ecuation);
  } else {
    this.solution = "solution: " + x1;
  }
}

//()
//(5*(x^2) - (3^x))
//Ve si hay parentesis para resolver
solver.prototype.evaluateEcuation = function(ecuation, value) {
  for (var i = 0; i < ecuation.length; i++) {
    if (ecuation.charAt(i) == ")") {
      for (var j = i; j > 0; j--) {
        if (ecuation.charAt(j) == "(") {
          ecuation = ecuation.replace(ecuation.substr((j), (i - j + 1)), this.solve(ecuation.substr((j + 1), (i - j - 1)), value));
          i = 0;
          break;
        }
      }
    }
  }
  var x = value;
  var e = 2.7182818;
  return eval(ecuation);
}


//Calcula parentesis
solver.prototype.solve = function(ecuation, value) {
  var solution = 0;
  if (ecuation.includes("e")) {
    ecuation = ecuation.replace("e", "2.7182818")
  }
  if (ecuation.includes("^")) {
    var values = ecuation.split("^");
    for (var i = 0; i < values.length; i++) {
      if (values[i] == "x") {
        values[i] = value;
      }
      if (values[i] == "-x") {
        values[i] = value * -1;
      }
    }
    solution = Math.pow(values[0], values[1]);
  }
  return solution;
}

//Resuelte el método de la secante modificada
solver.prototype.solveIteration = function(x0, xdx, fx, fxdx) {
  return (x0 - ((this.delta * fx) / (fxdx - fx)));
}
