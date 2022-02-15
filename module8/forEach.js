const prices = [11.53, 120, 55.7, 0.12];
const taxPrices = [];

prices.forEach((price, index, prices) => {
    taxPrices.push(price + price * 0.13);
});

console.log(prices);
console.log(taxPrices);
