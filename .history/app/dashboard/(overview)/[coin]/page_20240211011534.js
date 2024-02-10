import { fetchCoin } from "@/app/api/data";

export default async function Page ({params}) {
  const { slug } = params;
  const coin = fetchCoin(slug);
  console.log(coin);

  
  return (
    <div> This page will give details about </div>
  );
}
