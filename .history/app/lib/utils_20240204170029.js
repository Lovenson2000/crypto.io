
//Function to pick and round number of prices for the chart
export const pickAndroundPrices = (prices, n) => {
    let firstNPrices = prices.slice(0, n);
    return firstNPrices.map(price => parseFloat(price.toFixed(3)));
}