let newArray = [2, 1, 5, 3, 4, -10];

const minArray = (array) => {
    let array2 = [].concat(array);
    array2.sort((a,b) => a-b);
    return Math.abs(array2[0]);
}

console.log(minArray(newArray));