"use client";



export default function Page() {
  // const coins = await fetchCoins();

  // <Sparklines data={sampleData}>
  // <SparklinesLine style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }} />
  // </Sparklines>
  return (
    <div className='flex items-center justify-center'>
        <div className="bg-white text-slate-800 border-b-2 border-blue-500 w-40 m-4 h-20 shadow-md rounded-md">
          <h1 className="font-bold">Total Coins</h1>
          <p>100+</p>
        </div>
    </div> 
  );
}
