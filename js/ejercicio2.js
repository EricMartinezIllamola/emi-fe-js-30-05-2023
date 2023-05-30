let texto = prompt("Introduzca un texto:");

let textoEspacios = texto.split(" ").join("");
console.log(textoEspacios);

let textoSigno = textoEspacios.split("").join("-");
console.log(textoSigno);