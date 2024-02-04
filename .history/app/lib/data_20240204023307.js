const API_URL = "https://api..com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d&precision=3&x_cg_demo_api_key=CG-wMgmuqaPW6MjCgN1QbY11ZQM";

export async function fetchCoins() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
        return data;
        
    } catch (error) {
        console.error("Error fetching data", error);   
    }
}
