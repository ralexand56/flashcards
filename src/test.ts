
console.log('hey');

const arr = [3, 2, 5, 1, 1];

const newArr = [...new Set(arr)];

console.log(newArr);

const array = [1, 1, 2, 3, 5, 5, 1]
const uniqueArray = [...new Set(array)];
console.log(uniqueArray); // Result: [1, 2, 3, 5]
