// Sesion 05 - Numbers
/*En Js la unica forma de asignar un valor a una variable es como normalmente lo hemos hecho "let a = 5" o "let a = 5.5" en Js no importa si es numero int (entero) o float (decimal).*/

let a = 5;
console.log(a);

let b = 0.1;
console.log(b);

// Precision 
/*Una cosa que debemos de tener en cuenta es la precision que tiene Js y agrega 0's de mas al resultado, haciendolo matematicamente incorrecto. lo que hace JS es por como esta alamcenado en la memoria el dato. las variables en JS utilizan Bytes que estan constituidos por 8 bites, por lo que asigna 8 espacios de memoria.*/

let c = 0.2;
console.log(b + c);

/*Truco para solucionar el proble: utilizamos el operador 'round' que lo que hace es redondear hacia abajo SIN decimales, lo multiplicamos entre 100 y lo dividimos entre 100 para poder redondear el valor REAL */

console.log(Math.round((0.1 + 0.2) * 100)/100);
