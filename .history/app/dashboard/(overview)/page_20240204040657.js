import { bitcoinaData } from "@/app/lib/placeholder";
import Image from "next/image";

export default async function Page() { 
  const data = bitcoinaData;

  // <Sparklines data={sampleData}>
  // <SparklinesLine style={{ strokeWidth: 3, stroke: "#336aff", fill: "none" }} />
  // </Sparklines>
  return (
    <div className='flex items-center justify-center'>
        <div className="bg-white p-4 text-slate-700 relative border-b-2 border-main w-40 m-4 h-20 shadow-md rounded-md">
          <Image
            width={30}
            height={30}
            src={data.image}
            alt={data.name}
            className="absolute top-[-12px] left-[14px]"
          />
          <h1 className="font-bold text-lg">Total Coins</h1>
          <p>{data.name}</p>
        </div>
    </div> 
  );
}
