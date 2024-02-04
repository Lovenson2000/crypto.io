"use client";



export default function Page() {
  // const coins = await fetchCoins();

  // <Sparklines data={sampleData}>
  // <SparklinesLine style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }} />
  // </Sparklines>
  return (
    <div className='flex items-center justify-center'>
        <div className="w-40 h-20 border-teal-300 shadow-md rounded-md">
          <h1>Total Coins</h1>
          <p>100+</p>
        </div>
    </div> 
  );
}
