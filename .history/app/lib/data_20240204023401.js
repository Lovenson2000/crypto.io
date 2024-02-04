const API_URL = "=CG-wMgmuqaPW6MjCgN1QbY11ZQM";

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
