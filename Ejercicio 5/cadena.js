'use strict'

var person = prompt("Escribe la cadena de caracteres a convertir", "");

person = person.toUpperCase();
console.log("Entrada:" +person);
document.write("<h1>"+"Entrada: "+person+"</h1>");
person = person.toLowerCase();
console.log("Salida: "+person);
document.write("</br><h2>"+"Salida: "+person+"</h2>");
