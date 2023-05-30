let newArray = [1, 2, 3, 4, 5];

const sumaArray = (array) => {
    let array2 = [].concat(array);
    let acumulado = 0;
    for (let index = 0; index < array2.length; index++) {
        acumulado = acumulado + array2[index];
    }
    return acumulado;
}

console.log(sumaArray(newArray));