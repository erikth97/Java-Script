//Iterar los valores de una lista 
/* La forma nueva y eficiente de realizar (ES6) es con el metodo forEach, donde pasamos como parametro el valor y cada que entra en el metodo usa la variable, se puede utilizar con un callback o function. */
const array = ["hola", 2, 5, 90, false, undefined]
//Forma ANTIGUA:
for( let i = 0; i < array.length; i++){
    console.log(array[i])
}
//Forma ACTUAL ES6
let suma = 0;
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19]
arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor)
})
console.log(suma)

//Busqueda de un valor dentro de una lista .find()
/* en el ejemplo quiero encontrar el elemento 90. */
const variable = array.find(valor => {
    if (valor == 90) {
        return true
    }
})

console.log(variable)

const listaObjetos = [
    { nombre: "Erik", edad: 25 },
    { nombre: "Fabian", edad: 24 },
    { nombre: "Tamayo", edad: 23 },
    { nombre: "Heredia", edad: 22 },
    { nombre: "Pablo", edad: 21 },
]
 //Forma ANTIGUA
/*const objeto = listaObjetos.find(o => {
    if (o.nombre === "Erik") {
        return true
    }
 })
console.log(objeto)*/

//Forma ACTUAL
const objeto = listaObjetos.find(o => o.nombre === "Fabian")
console.log(objeto.edad)

const { edad } = listaObjetos.find(o => o.nombre === "Fabian")
console.log(edad)
