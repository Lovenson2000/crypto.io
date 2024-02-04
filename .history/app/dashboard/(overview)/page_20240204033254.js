"use client";



export default function Page() {
  // const coins = await fetchCoins();

  // <Sparklines data={sampleData}>
  // <SparklinesLine style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }} />
  // </Sparklines>
  return (
    <div className='flex items-center justify-center'>
        <div className="bg-white border-b-2 w-40 m-4 h-20 shadow-md rounded-md">
          <h1>Total Coins</h1>
          <p>100+</p>
        </div>
    </div> 
  );
}
