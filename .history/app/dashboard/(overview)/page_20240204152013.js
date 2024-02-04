"use client";
import { bitcoinaData, Users } from "@/app/lib/placeholder";
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
import Image from "next/image";
import MyLine from "@/app/components/MyLine";

export default function Page() {

  const data = Users;
  return (
    <div className='flex items-center justify-center'>
      <div className="bg-white p-4 text-slate-700 relative border-b-2 border-main m-4 h-20 shadow-md rounded-md">

        <Image
          width={30}
          height={30}
          src={bitcoinaData.image}
          alt={bitcoinaData.name}
          className="absolute top-[-12px] left-[60px]"
        />
        <div className="flex items-center justify-between">
          <div>
            <p>{bitcoinaData.name}</p>
            <p>{bitcoinaData.current_price}</p>
          </div>
          <MyLine />
        </div>
      </div>

    </div>
  );
}