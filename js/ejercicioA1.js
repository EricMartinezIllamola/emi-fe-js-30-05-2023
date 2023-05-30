let newArray = [1, 2, 3, 4, 5];

// console.log(newArray[newArray.length - 1])

const ultimoValor = (array) => {
    let array2 = [].concat(array);
    let longitud = array2.length - 1;
    return array2[longitud];
}

console.log(ultimoValor(newArray));