let newArray = ["A", "B", "C", "D", "E"];

const stringArray = (array) => {
    let array2 = [].concat(array);
    return array2.join(" ");
}

console.log(stringArray(newArray));