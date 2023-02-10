//- factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
let contador = 1;
let factorial = 1;

while(true){
    if(contador > 10){
    break;
    }
    factorial *= contador;
    contador++;
}
console.log(factorial);