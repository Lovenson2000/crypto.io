
import React from "react";
import { LineChart, Line } from "recharts";
import { bitcoinaData } from "../lib/placeholder";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    
    pv: 3908,
   
  },
  {
    pv: 4300,
  }
];

export default function MyLine() {
  return (
    <LineChart width={150} height={80} data={data}>
      <Line 
        type="monotone" 
        dataKey="pv" 
        stroke="#8884d8"
        dot={false}
        strokeWidth={1.5} />
    </LineChart>
  );
}