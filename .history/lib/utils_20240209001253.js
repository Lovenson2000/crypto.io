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
