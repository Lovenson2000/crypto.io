"use client";
import { bitcoinaData } from "@/app/lib/placeholder";
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';
import Image from "next/image";

export default function Page() {

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
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
            <LineChart data={data}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
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
