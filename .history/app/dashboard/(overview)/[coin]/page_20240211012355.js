import { fetchCoin } from "@/app/api/data";

export default async function Page ({params}) {
  
  const { coin } = params;
  const coinData = await fetchCoin(coin);

  return (
    <div> This page will give details about {coinData.name} </div>
  );
}
