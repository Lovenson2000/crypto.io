"use client";

import { fetchCoins } from "@/app/lib/data";

export default async function Page() {
  const coins = await fetchCoins();

  // <Sparklines data={sampleData}>
  // <SparklinesLine style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }} />
  // </Sparklines>
  return (
    <div className='flex items-center justify-center'>
        <div className="w-40 h-20 shadow-md">
          <h1>Total Coins</h1>
          <p>100+</p>
        </div>
    </div> 
  );
}