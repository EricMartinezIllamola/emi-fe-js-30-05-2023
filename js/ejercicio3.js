let texto = prompt("Introduzca un texto:");
let acumulado = 0;

for (let index = 0; index < texto.length; index++) {
    if (texto[index] == "a" || texto[index] == "e" || texto[index] == "i" || texto[index] == "o" || texto[index] == "u") {
        acumulado = acumulado + 1;
    }
}

console.log(acumulado);