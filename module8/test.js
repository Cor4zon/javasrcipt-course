const arr = [1, 2.7, 0, -3.14]
const arr2 = arr;
const testArr = [... arr];
const arr3 = arr.slice();

console.log(arr === testArr);
console.log(arr === arr2);
console.log(arr === arr3);
console.log(arr3);
