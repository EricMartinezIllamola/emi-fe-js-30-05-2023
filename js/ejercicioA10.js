let newArray = [2, 1, 5, 3, 4, -100];

const sumaParesArray = (array) => {
    let array2 = [].concat(array);
    let acumulado = 0;
    let longitud = array2.length;
    for (let index = 0; index < array2.length; index++) {
        if (array2[index] % 2 == 0) {
            acumulado = acumulado + array2[index];
        }
    }
    return acumulado;
}

console.log(sumaParesArray(newArray));