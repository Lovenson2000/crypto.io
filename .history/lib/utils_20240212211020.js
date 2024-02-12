import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

//oK7gNzm5jSxPDqtb

//Function to pick and round number of prices for the chart
export const pickAndroundPrices = (prices, n) => {
  let firstNPrices = prices.slice(0, n);
  return firstNPrices.map(price => parseFloat(price.toFixed(3)));
}

export const roundToDecimals = (number, degree) => {
  return parseFloat(number.toFixed(degree))
}

export const average = (prices) => {

  const averages = [];

  for (let i = 0; i < prices.length; i += 24) {
    const sliceOfPrices = prices.slice(i, i + 24);
    const sum = sliceOfPrices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / sliceOfPrices.length; 
  }
}

// export const filterCoins = (coins, parameter) => {
//   return coins
//     .filter((coin) => coin[parameter] !== undefined && coin[parameter] !== null);
// };


