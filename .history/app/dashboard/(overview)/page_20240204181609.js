"use client";
import { bitcoinaData } from "@/app/lib/placeholder";
import Image from "next/image";
import MyLine from "@/app/components/MyLine";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { fetchCoins } from "@/app/api/data";

export default function Page() {
  // const coins = await fetchCoins();
  // console.log(coins);

  return (
    <div className='flex items-center justify-center'>
      <div className="bg-white px-2 py-2 text-slate-700 relative border-b-2 border-main m-4 shadow-md rounded-sm">

        <Image
          width={30}
          height={30}
          src={bitcoinaData.image}
          alt={bitcoinaData.name}
          className="absolute top-[-12px] left-1/2 transform -translate-x-1/2 "
        />
        <div className="flex items-center mt-4 gap-4 h-full w-full justify-between">
          <div className="w-1/2 flex flex-col">
            <p className="text-xl font-semibold">{bitcoinaData.name}</p>
            <p className="text-[.8rem]">${bitcoinaData.current_price}
              <span>{bitcoinaData.market_cap_change_percentage_24h > 0 ? <FaArrowTrendUp className="text-teal-300" /> : <FaArrowTrendDown className="text-red-500" />}
              </span>
            </p>
          </div>
          <div className="w-1/2">
            <MyLine />
          </div>
        </div>
      </div>

    </div>
  );
}
