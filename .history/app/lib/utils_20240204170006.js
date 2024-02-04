
export const pickAndroundPrices = (prices, n) => {
    let firstNPrices = prices.slice(0, n);
    return firstNPrices.map(price => parseFloat(price.toFixed(3)));
}