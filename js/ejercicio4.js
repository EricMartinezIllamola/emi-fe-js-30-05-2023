let texto = prompt("Introduzca un texto:");

let comienzo = texto.indexOf("(");
let final = texto.indexOf(")");

if (comienzo == -1) {
    console.log(" ");
} else if (final == -1) {
    final = texto.length;
    console.log(texto.substring((comienzo + 1), final));
} else {
    console.log(texto.substring((comienzo + 1), final));
}