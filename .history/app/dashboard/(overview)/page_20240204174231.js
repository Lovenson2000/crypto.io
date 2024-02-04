"use client";
import { bitcoinaData } from "@/app/lib/placeholder";
import Image from "next/image";
import MyLine from "@/app/components/MyLine";

export default function Page() {

  return (
    <div className='flex items-center justify-center'>
      <div className="bg-white p-2 h-28 text-slate-700 relative border-b-2 border-main m-4 shadow-md rounded-sm">

        <Image
          width={30}
          height={30}
          src={bitcoinaData.image}
          alt={bitcoinaData.name}
          className="absolute top-[-12px] left-1/2 transform -translate-x-1/2 "
        />
        <div className="flex mt-4 gap-2 h-full w-full justify-between">
          <div className="flex col">
            <p className="text-xl font-semibold">{bitcoinaData.name}</p>
            <p className="text-[.9rem]">{bitcoinaData.current_price}$</p>
          </div>
          <MyLine />
          
        </div>
      </div>

    </div>
  );
}
