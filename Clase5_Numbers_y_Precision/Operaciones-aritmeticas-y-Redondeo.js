// ---------------------------------Principales operaciones aritmeticas ----------------------------------------------- 
let a = 3.5;
let b = 4.8;

//Operacion: SUMA, Operador: (+)
console.log(a + b)

//Operacion: RESTA, Operador: (-)
console.log(a - b)

//Operacion: MULTIPLICACION, Operador: (*)
console.log(a * b)

//Operacion: DIVICION, Operador: (/)
console.log(a / b)


//        --------------------------Representacion de los numeros en cadenas de texto -----------------------------------------

/*En algun momento nos puede interesar representar numeros en cadenas de Texto como en el Padding. el Operador principal para comvertir un tipo numerico usamos ".toString();" que es un metodo. Usamos "Type" para que nos senale que tipo de dato es, ya sea: Number o a la que la queremos convertir: String.*/

console.log(typeof a);
let a_s = a.toString();

console.log(a_s);
console.log(typeof a_s);

//    -------------------------------Redondeo de Numeros Decimales --------------------------------------------------------------

let c = 3.3
let d = c * 3;

console.log (d);
console.log(typeof d);

// Metodo .toFixed(x)
/*Cuando quiero agregar solo 2 decimales (o mas de 1) agregamos el "Metodo toFixed", seguido pasamos un parametro, el cual le damos el numero de decimales que queremos tener, una cosa importante que realiza este metodo es que en automatico comvierte de Number a String. Limita el numero de decimales al valor. Asi como puede quitar decimales los puede agregar decimales, solo colocando cuantos quiero en el parametro del metodo.*/

console.log(d.toFixed(4));
console.log(typeof d.toFixed(4));

let e = 1839.123456789;
let f = 2213556153215;
console.log(e.toFixed(2));
console.log(f.toFixed(3));

//Metodo .toPrecision(x)
/*Realiza un redondeo cientifico. Agregamos el Metodo ".toPrecision", y colocamos en los parametros del metodo cuantos digitos quiero que tenga de precision, que tome el umero de cigras significativas que quiero que tenga el numero (redondeado). Limita el  numero de Cifras Significativas. Igual que el metodo anterioir al final nos arroja un String.*/

console.log(e.toPrecision(7));
console.log(f.toPrecision(7));

console.log(typeof f.toPrecision(3));

