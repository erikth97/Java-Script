let alturaEnCentimetros = 165;
let alturaEnMetros = 1.65;
let pesoEnKg = 75.4;

let alturaRedondeada = alturaEnMetros.toFixed(1); // Muestra mostrar 1.6 metros
console.log(alturaRedondeada);

let pesoRedondeado = Math.floor(pesoEnKg); // Muestra 75 kilogramos
console.log(pesoRedondeado);

let maximoValor = Number.MAX_VALUE;
console.log(maximoValor);

let maximoValorMasUno = Number.MAX_VALUE + 1;
console.log(maximoValorMasUno);

let comparacionMaximosValores = (maximoValor === maximoValorMasUno);
console.log(comparacionMaximosValores);