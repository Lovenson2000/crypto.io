import { bitcoinaData } from "@/app/lib/placeholder";
import Image from "next/image";
import { Sparklines, SparklinesLine } from "react-sparklines";

export default async function Page() {
  const data = bitcoinaData;

  return (
    <div className='flex items-center justify-center'>
      <div className="bg-white p-4 text-slate-700 relative border-b-2 border-main w-40 m-4 h-20 shadow-md rounded-md">
        <div>
          <Image
            width={30}
            height={30}
            src={data.image}
            alt={data.name}
            className="absolute top-[-12px] left-[60px]"
          />
          <p>{data.name}</p>
          <p>{data.current_price}</p>
        </div>
        <div>
          <Sparklines data={sampleData}>
            
          </Sparklines>
        </div>

      </div>
    </div>
  );
}
