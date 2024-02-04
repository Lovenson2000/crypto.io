"use client";

import { fetchCoins } from "@/app/lib/data";

export default async function Page() {
  const coins = await fetchCoins();
  console.log(coins);
  return (
    <div className='flex items-center justify-center'>
        <h1>Dashboard Overview Page</h1>
    </div> 
  );
}
