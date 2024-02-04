const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&x_cg_demo_api_key=YOUR_API_KEY";

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
