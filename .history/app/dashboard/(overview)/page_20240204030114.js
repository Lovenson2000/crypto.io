"use client";

import { fetchCoins } from "@/app/lib/data";

export default async function Page() {
  const coins = await fetchCoins();

  // <Sparklines data={sampleData}>
  // <SparklinesLine style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }} />
  // </Sparklines>
  return (
    <div className='flex items-center justify-center'>
        <h1>Dashboard Overview Page</h1>
    </div> 
  );
}
