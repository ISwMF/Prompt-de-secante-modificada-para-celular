function shower() {

}

//Muestra el comando que se ingresó
shower.prototype.showCommand = function(command) {
  $("#response").append("<p>" + command + "--></p>");
}

//Muestra los comandos que se pueden utilizar
shower.prototype.sendHelp = function() {
  $("#response").append("Escriba 1 para limpiar</br>");
  $("#response").append("Escriba 2 para ayuda con el cambio de color</br>");
  $("#response").append("Escriba 3 para ayuda</br>");
  $("#response").append("Escriba 4 para ayuda con una ecuación</br><p></p>");
  $("#line").val("");
}

//limpia la pantalla
shower.prototype.clean = function() {
  $("#response").html("");
  $("#line").val("");
}

//Muestra los colores en los que se puede cambiar la letra
shower.prototype.showColors = function() {
  $("#response").append("<p>Colores disponibles: pink, purple, red, green</p>");
  $("#response").append("Ingrese el siguiente comando: cambio('colorx')");
  $("#line").val("");
}

//Cambia el color de la letra
shower.prototype.changeColor = function(color) {
  $("#response").css('color', color);
  $("#line").val("");
}

//muestra una nueva linea de comandos para ingresar la ecuación con sus opciones
shower.prototype.showInput = function() {

  $("#line").remove();
  $("#response").hide();
  $(".everything").append("<div id=\"response2\"></div>")
  $("#beyourself").html("<input class=\"w3-input\" name=\"line2\" id=\"line2\" onkeypress=\"analizer.captureEquation(event)\"></input>");
  $("#response2").append("<p>La siguiente linea de comandos SOLO acepta la ecuación</p>");
  $("#response2").append("<p>El comando debe ser eqx(), cada atributo debe estar separado por una coma ',' </p>");
  $("#response2").append("<p>El primer atributo es la ecuación (Obligatorio)</p>");
  $("#response2").append("<p>El segundo atributo es el valor de x (Obligatorio)</p>");
  $("#response2").append("<p>El tercer atributo es el valor de delta (Opcional) </p>");
  $("#response2").append("<p>eqx(ecuación, valor de x, delta [OPCIONAL])</p>");
  $("#response2").append("<p>Ejemplo de uso: </p>");
  $("#response2").append("<p> 1: eqx(((e^-x)-x), 1)</p>");
  $("#response2").append("<p> 2: eqx((5*(x^2) - (3^x)), 1, 0.1)</p>");

}

//muestra la respuesta de la ecuación. Puede haber dos respuestas, una correcta y una incorrecta
//Correcta: Retorna una respuesta numérica
//Incorrecta: Retorna 'command not found' o 'something is wrong' por un error en el comando ingresado
shower.prototype.showEcuationResponse = function(response){
  $("#response2").remove();
  $("#line2").remove();
  $("#beyourself").html("<input class=\"w3-input\" name=\"line\" id=\"line\" onkeypress=\"analizer.captureCommand(event)\"></input>");
  $("#response").show();
  $("#response").append("<p>" + response + "</p>");
}
