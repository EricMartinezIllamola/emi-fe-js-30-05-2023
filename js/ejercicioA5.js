let newArray = [1, 2, 3, 4, 5];

const promedioArray = (array) => {
    let array2 = [].concat(array);
    let acumulado = 0;
    let longitud = array2.length;
    for (let index = 0; index < array2.length; index++) {
        acumulado = acumulado + array2[index];
    }
    return acumulado / longitud;
}

console.log(promedioArray(newArray));