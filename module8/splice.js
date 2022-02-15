const arr = [1, 2.7, 0, -3.14]
const arr2 = [...arr].splice();      // remove all elements in array
const arr3 = arr.splice(2); // remove elements after second element of array

console.log(arr2, arr);


const hobbies = ['sport', 'coding', 'guitar']
console.log(hobbies);
hobbies.splice(1, 0, 'poker');
console.log(hobbies);