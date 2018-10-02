'use strict'

var centigrados = prompt("Escribe los grados centigrados a convertir");
var resultado = calcular(centigrados);
document.write("<h1>"+centigrados+ "° Centígrados  es igual a "+resultado+" Fahrenheit</h1>");
function calcular(x) {
    var z = x * 2;
    x = z * (1 / 10);
    x = z-x;
    x+=32;

    return x;
}
