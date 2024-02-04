import { bitcoinaData } from "@/app/lib/placeholder";
import Image from "next/image";

export default function Page() {
  const {data, image} = bitcoinaData;  

  // <Sparklines data={sampleData}>
  // <SparklinesLine style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }} />
  // </Sparklines>
  return (
    <div className='flex items-center justify-center'>
        <div className="bg-white p-4 text-slate-700 relative border-b-2 border-main w-40 m-4 h-20 shadow-md rounded-md">
          <Image
            width={30}
            height={30}
            href= {image}
            alt="coin-logo"
            className="absolute top-0 left-32"
          />
          <h1 className="font-bold text-lg">Total Coins</h1>
          <p>100+</p>
        </div>
    </div> 
  );
}
