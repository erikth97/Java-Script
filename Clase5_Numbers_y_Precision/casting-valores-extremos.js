// -------------------------------- Operador .valueOf() - Obtener numeros a aprtir de Literales -------------------------------------

/*Para daclarar variables numericas de otra manera. Podemos definir tambien los valores numericos como parte de un proteotipo. lo que hace es castear el valor haciendo que sea numerico por la propiedad Number. Se usa rara ves.*/
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a + b);
console.log(a.valueOf() + b.valueOf());


// --------------------------------- NaN - Infinity ---------------------------------------------------------------------------------
/* NaN = Not a Number, cuando queremos usar un metodo para variables numericas en algo que no es una variable numerica, como un String la consola nos va a devolver NaN (algo no esta cuadrando).*/

let n = Number('adios');
console.log(n);
console.log(isNaN(n));

/* Infinity: Como en el ejemplo algo dividido entre 0 el valor es indeterminado, en este caso JS lo toma como infinito. el mismo caso sucede cuando una cariable tiene como valor = null, el resultado sera infinito.*/
let numerador = 19;
let divisor = 0;
let divisor_2 = null
console.log(numerador / divisor);
console.log(numerador / divisor_2);


// ---------------------- Como Convertir los String a Valores Num con Number, parseInt y parseFloat ---------------------------------
/*Obtener el valor numerico de un String y poder realizaar operaciones, sin que el operador "+" realice una concatenacion de texto.
/*  Number(): nos permite castear el string y devolverlo a un valor Number */
let numero = '5.89';
let numero2 = 17.2;

console.log(typeof numero);
console.log(numero + numero2) //da como resultado un error del concepto, concatenando las cantidades
console.log(Number(numero) + numero2) //da como resultado 23.09 que es el correcto ya que se uso el metodo Number y colocamos la variabble como parametro

/* parseInt: en programacion la palabra 'parse' hace referencia a extruir un valor a otro, en este caso seria comvertir el valor a un Int (entero), osea que lo que realiza este Metodo es comvertir cantidades float (5.2) en int (5)*/
console.log(parseInt(numero))

/* parseFloat: al igual que el parseInt este operador hace lo contrario, ya que conserva los mismos decimales que tiene la cifra. otra cosa importante es que cambia el String a Number*/
console.log(parseFloat(numero))
let num3 = 4;
console.log(parseFloat(num3))


// --------------------------------- Numeros Hexadecimales --------------------------------------------------------------------------
/* JS trabaja con numeros en base al 10 (1-10), pero tambien trabaja con numeros hexadecimales que son los numeros en base 16. (1-8 y de a,b,c,d... hasta el 16) se utilizan sobre todo en asignacion de memoria, el cual utiliza 2 byte (16 bites). un punto importante es que en los numeros Hexadecimales no hay Float, todos son Int. Para ello vamos a utilizar el Metodo parseInt y de parametro al ser hexadecimal pondremos 16. todos los hexadecimales comienzan con "0x" */
let numHex = '0x3a5b7';
console.log(parseInt(numHex, 16));


// --------------------------------- Como Obtener los valores Maximo y Minimo en JS -------------------------------------------------
/*tenemos la posibilidad de obtener el valor Max y Min por el numero de Bites que ocupa. el valor EPSILON es la precision minima que podemos tener , ya que es el menor numero con el que podemos tranajar, es la minima diferencia entre un numero y otro. */
let min_precision = Number.EPSILON;
let min_valor_Js = Number.MIN_VALUE;
let max_valor_Js = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_Js);
console.log(max_valor_Js);