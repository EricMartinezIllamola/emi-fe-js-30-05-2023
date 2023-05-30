let newArray = [1, 2, 3, 4, 5];

const primerValor = (array) => {
    let array2 = [].concat(array);
    return array2[0];
}

console.log(primerValor(newArray));