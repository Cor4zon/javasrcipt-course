// slices are like slices in python
const hobbies = ['sport', 'coding', 'guitar', 'music', 'reading', 'swimming'];


console.log(hobbies.slice())


// we can use slices to make copy
const another_hobbies = hobbies.slice();
const hobbies2 = hobbies;

console.log(hobbies === another_hobbies);
console.log(hobbies === hobbies2);