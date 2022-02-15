const prices = [10, 20, 30, 50, 5];

const product = prices.reduce((previousValue, currentValue) => previousValue *= currentValue, 1);
const sum = prices.reduce((prevValue, curValue) => prevValue += curValue, 0);

console.log(`product: ${product}\nsum: ${sum}`);