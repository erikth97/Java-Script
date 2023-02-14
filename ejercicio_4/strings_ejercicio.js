//Una cadena de texto con tu nombre
let str_name = " Erik Fabian ";
console.log(str_name);

//Una cadena de texto cin tu apellido
let str_lastname = "  Tamayo Heredia  ";
console.log(str_lastname);

//Una cadena de texto que se llame "estudiante" concatenando tu nombre y tu apellido con un espacio enre medias
let str_estudiante = (str_name + " " + str_lastname); 
console.log(str_estudiante)
console.log(str_name.concat(" ", str_lastname));
console.log(str_name + " " + str_lastname);
console.log(`${str_name} ${str_lastname}`);

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pro todo en mayusculas
let estudianteMayus = str_estudiante;
console.log(estudianteMayus.toUpperCase());

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minuscula
let estudianteMinus = str_estudiante;
console.log(estudianteMinus.toLowerCase());

//Una variable que contenga el numero de letras de la cadena "estudiante" contando los espacios
let nletras = str_estudiante;
console.log(nletras.length);

//Una variable que contenga la primera letra del nombre
let primeraletra = str_name;
console.log(primeraletra.charAt(0));
console.log(primeraletra[0]);

//Una variable que contenga la ultima letra del apellido
let ultimaletra = str_lastname;
console.log(ultimaletra.charAt(4));

//Una cadena de texto que elimine los espacios de la variable "estudiante"
let str_espacios = str_estudiante;
console.log(str_espacios.trim().length);
console.log(str_espacios.trimStart().length);
console.log(str_espacios.trimEnd().length);

//Una variable booleana que diga si el nombre esta comtenido en la variable "estudiante"
 let boolean = str_estudiante;
 console.log(boolean.indexOf("Erik"));
 console.log(boolean.lastIndexOf("Tamayo"));