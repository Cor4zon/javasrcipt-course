const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// task1
if (randomNumber > 0.7) {
    alert(`Number ${randomNumber} is greater than 0.7`);
}

// task 2
const array = [1, 2, 8, randomNumber, 9];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for (const element of array) {
    console.log(element);
}

// task 3
console.log("--------------")
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}


// task 4
const secondRandomNumber = Math.random();

if ((randomNumber > 0.7 && secondRandomNumber > 0.7) ||
    randomNumber <= 0.2 ||
    randomNumber <= 0.2 ) {
    alert(`oh. ${randomNumber} ${secondRandomNumber}`);
}