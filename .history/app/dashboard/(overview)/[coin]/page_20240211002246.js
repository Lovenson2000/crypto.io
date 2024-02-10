
import { fetchCoin } from "@/app/api/data";
import { useSearchParams } from "next/navigation";

export default async function CoinPage ({params}) {
  const { id } = params;
  const coin = await fetchCoin(id);
  
  return (
    <div> This page will give details about </div>
  );
}
