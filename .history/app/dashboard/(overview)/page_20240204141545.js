"use client";

import { bitcoinaData } from "@/app/lib/placeholder";
import Image from "next/image";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";

export default function Page() {

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
          <Sparklines data={bitcoinaData.sparkline_in_7d.price} limit={5} width={100} height={20} margin={5}>
            <SparklinesLine style={{ fill: "none" }} />
            <SparklinesSpots />
          </Sparklines>
        </div>
      </div>
    </div>
  );
}
