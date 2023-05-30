let newArray = [1, 2, 3, 4, 5];

const reversoArray = (array) => {
    let array2 = [].concat(array);
    return array2.reverse();
}

console.log(reversoArray(newArray));