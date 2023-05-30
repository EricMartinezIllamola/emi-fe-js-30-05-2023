let newArray = [2, 1, 5, 3, 4];

const maxArray = (array) => {
    let array2 = [].concat(array);
    array2.sort((a,b) => b-a);
    return array2[0];
}

console.log(maxArray(newArray));