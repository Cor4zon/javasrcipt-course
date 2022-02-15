const prices = [11.53, 120, 55.7, 0.12];
const tax = 0.13;

const taxPrices = prices.map(price => price + price * tax )

console.log(prices, '\n', taxPrices);
