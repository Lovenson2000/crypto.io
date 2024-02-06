import next from "next";
import { unstable_noStore as noStore } from "next/cache";

export const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&24h&precision=3&x_cg_demo_api_key=CG-wMgmuqaPW6MjCgN1QbY11ZQM";

// &x_cg_demo_api_key=CG-wMgmuqaPW6MjCgN1QbY11ZQM
export async function fetchCoins() {
    try {
        const response = await fetch(API_URL, next: {revalidate: 3600});
        const data = await response.json();
        return data; 

    } catch (error) {
        console.error("Error fetching data", error);   
    }
}

export async function fetchFirstFourCoins() {
    noStore();
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data.slice(0, 4);
        
    } catch (error) {
        console.error("Error fetching data", error);   
    }
}














// export async function fetchCoins(timeInterval) {
//     try {
//       const sparklineIntervals = {
//         '1h': 'price_change_percentage_1h_in_currency',
//         '24h': 'price_change_percentage_24h_in_currency',
//         '7d': 'price_change_percentage_7d_in_currency',
//         '14d': 'price_change_percentage_14d_in_currency',
//         '30d': 'price_change_percentage_30d_in_currency',
//         '1y': 'price_change_percentage_1y_in_currency',
//       };
  
//       const API_URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=${sparklineIntervals[timeInterval]}&x_cg_demo_api_key=CG-wMgmuqaPW6MjCgN1QbY11ZQM`;
  
//       const response = await fetch(API_URL);
//       const data = await response.json();
//       console.log(data);
//       return data;
//     } catch (error) {
//       console.error("Error fetching data", error);
//     }
//   }
