import { data } from "autoprefixer";


const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d&precision=3";

export async function fetchCoins() {

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data.length);
        
    } catch (error) {
        console.error("Error fetching data", error);   
    }
    return data;
}
