const originalArray = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
const transformedArray = originalArray.map(obj => obj.price); // produces [10.99, 5.99, 29.99]
const sum = transformedArray.reduce((sumVal, curVal) => sumVal + curVal, 0); // => 46.97



// console.log(sum === originalArray.map(obj => obj.price).reduce((prevVal, curVal) => prevVal + curVal, 0))