import bitcoinData from "";
export default function Page() {


  

  // <Sparklines data={sampleData}>
  // <SparklinesLine style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }} />
  // </Sparklines>
  return (
    <div className='flex items-center justify-center'>
        <div className="bg-white p-4 text-slate-700 border-b-2 border-main w-40 m-4 h-20 shadow-md rounded-md">
          <h1 className="font-bold text-lg">Total Coins</h1>
          <p>100+</p>
        </div>
    </div> 
  );
}
