import { fetchCoin } from "@/app/api/data";

export default async function Page ({params}) {
  const { coin } = params;
  console.log(coin);

  const data = await fetchCoin(coin);
  console.log(data);
  


  return (
    <div> This page will give details about </div>
  );
}
