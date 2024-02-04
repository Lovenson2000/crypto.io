
import React from "react";
import { LineChart, Line } from "recharts";
import { bitcoinaData } from "../lib/placeholder";

const { sparkline_in_7d: { price: pv }, ...rest } = bitcoinaData;

const data = [
  {
    pv,
  },
  {

    pv,
    
  },
  {
  
    pv,

  },
  {
    pv,
  },
  {
   
    pv,
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