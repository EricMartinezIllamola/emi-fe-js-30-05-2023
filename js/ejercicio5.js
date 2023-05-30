let texto = prompt("Introduzca un texto:");

let textoArray = texto.split("");
let textoReverso = textoArray.reverse();
let textoRString = textoReverso.join("");

console.log(textoRString);