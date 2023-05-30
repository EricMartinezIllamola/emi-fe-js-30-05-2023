let newArray = [1, 2, 3, 4, 5];
let numero = 7;

const arrayNum = (array, num) => {
    let array2 = [].concat(array);
    array2.push(num);
    return array2;
}

console.log(arrayNum(newArray, numero));