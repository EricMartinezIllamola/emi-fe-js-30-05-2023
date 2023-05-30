let texto = prompt("Introduzca un texto:");
acumulado = 0;

let  textoMin = texto.toLowerCase();
let textoNoEspacios = textoMin.split(" ").join("").split("");
let longitud = textoNoEspacios.length - 1;

for (let index = 0; index < longitud; index++) {
    if (textoNoEspacios[index] != textoNoEspacios[(longitud - index)]) {
        acumulado = acumulado + 1;
    }
}

if (acumulado == 0) {
    console.log("El texto es políndromo");
} else {
    console.log("El texto no es políndromo");
}