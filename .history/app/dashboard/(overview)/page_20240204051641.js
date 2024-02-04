import { bitcoinaData } from "@/app/lib/placeholder";
import { LineChart } from "lucide-react/dist/lucide-react";
import Image from "next/image";

export default function Page() {
  const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];

  return (
    <div className='flex items-center justify-center'>
      <div className="bg-white p-4 text-slate-700 relative border-b-2 border-main w-40 m-4 h-20 shadow-md rounded-md">
        <div>
          <Image
            width={30}
            height={30}
            src={bitcoinaData.image}
            alt={bitcoinaData.name}
            className="absolute top-[-12px] left-[60px]"
          />
          <p>{bitcoinaData.name}</p>
          <p>{bitcoinaData.current_price}</p>
        </div>
        <div>
          <LineChart width={100} height={200} data={data}>
            <Line type="monotone" dataKey = "uv"

          </LineChart>
          
        </div>
      </div>
    </div>
  );
}
