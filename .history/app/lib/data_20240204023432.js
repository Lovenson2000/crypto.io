const API_URL = "https://api.coingecko.com/api/v3/ping?x_cg_demo_api_key=CG-wMgmuqaPW6MjCgN1QbY11ZQM";

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
