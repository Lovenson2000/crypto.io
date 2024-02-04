
export const pickFirstNPrices = (prices, n) => {
    return prices.slice(0, n);
}

export const roundPricesToThree = (prices) => {
    return prices.map((price) => parseFloat(price.toFixed(3)));
}