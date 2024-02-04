
import React from "react";
import { LineChart, Line } from "recharts";
import { bitcoinaData } from "../lib/placeholder";

const data = [
  {
    pv: 1348,
  },
  {
    pv: 1398,
  },
  {
   
    pv: 9800,
  
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
    <LineChart width={150} height={80} data={bitcoinaData.sparkline_in_7d.price}>
      <Line 
        type="monotone" 
        dataKey={bitcoinaData.sparkline_in_7d.price} 
        stroke="#8884d8"
        dot={false}
        strokeWidth={1.5} />
    </LineChart>
  );
}