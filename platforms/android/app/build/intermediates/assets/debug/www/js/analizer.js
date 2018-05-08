function analizer() {

}

//Al presiona enter en la consola, evaluará el comando
//Solo en la consola 1
analizer.prototype.captureCommand = function(e) {
  if (e.keyCode === 13 && !e.shiftKey) {
    e.preventDefault();
    this.evaluateCommand($("#line").val());
  }
}

//Al presionar enter en la consola, evaluará la ecuación
//Solo es posible hacerlo en la consola 2 (Se obtiene al ingresar el número 4 en la primera consola)
analizer.prototype.captureEquation = function(e) {
  if (e.keyCode === 13 && !e.shiftKey) {
    e.preventDefault();
    var shower1 = new shower();
    shower1.showEcuationResponse(this.analizeEcuation($("#line2").val()));
  }
}

//Evalua los comandos ingresados en la primera consola
analizer.prototype.evaluateCommand = function(command) {
  var shower1 = new shower();
  switch (command) {
    case "1":
      shower1.showCommand(command);
      shower1.clean();
      break;
    case "2":
      shower1.showCommand(command);
      shower1.showColors();
      break;
    case "3":
      shower1.showCommand(command);
      shower1.sendHelp();
      break;
    case "4":
      shower1.showInput();
      break;
    case "cambio(pink)":
      shower1.showCommand(command);
      shower1.changeColor("pink");
      break;
    case "cambio(purple)":
      shower1.showCommand(command);
      shower1.changeColor("purple");
      break;
    case "cambio(red)":
      shower1.showCommand(command);
      shower1.changeColor("red");
      break;
    case "cambio(green)":
      shower1.showCommand(command);
      shower1.changeColor("green");
      break;
    default:

      shower1.showCommand(command);
      shower1.sendHelp();

  }
}

//Analiza la ecuación
//Solo es posible hacerlo en la consola 2 (Se obtiene al ingresar el número 4 en la primera consola)
analizer.prototype.analizeEcuation = function(ecuation) {
  var shower1 = new shower();
  shower1.showCommand(ecuation);
  if (ecuation.includes("eqx(") && ecuation.charAt(ecuation.length - 1) == ')') {

    var variables = ecuation.split(",");
    variables[variables.length - 1] = variables[variables.length - 1].replace(")", "");
    variables[0] = variables[0].replace("eqx(", "");
    if (variables.length > 3) {
      return "Something is wrong";
    } else {
      var solver1 = new solver(variables[0], variables[1], "");
      if (variables.length == 3) {
        solver1.delta = parseFloat(variables[2]);
      }
      solver1.calculate(solver1.ecuation);
      if (solver1.solution == "solution: NaN") {
        return "Something is wrong"
      } else {
        return solver1.solution;
      }
    }
  } else {
    return "Command not found";
  }
}

//Constructor (más rápido imposible)
var analizer = new analizer();
