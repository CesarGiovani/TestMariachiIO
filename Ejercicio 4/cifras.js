'use strict'
var cifra = prompt("Escribe la cifra");
var x = contador(cifra);
document.write("<h1>"+"La cifra ingresada tiene "+x+" caracteres"+"</h1>");

function contador(valor) {
    var cadena = valor;
    var  valor= cadena.length;
    return valor ;
}