"use client";
import { bitcoinaData, Users } from "@/app/lib/placeholder";
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
import Image from "next/image";

export default function Page() {

  const data = Users;
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
      </div>
      <div className="w-full h-full">
        <div className="chartInfo">

          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={data.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={data.dataKey}
                stroke="#1a0dff"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
