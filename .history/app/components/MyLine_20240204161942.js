
import React from "react";
import { LineChart, Line, Tooltip } from "recharts";

const data = [
  {
    uv: 4000, 
    
  },
  {
  
    uv: 3000,

  },
  {
   
    uv: 2000,
  },
  {
  
    uv: 2780,
  },
  {
  
    uv: 1890,
  },
  {
    
    uv: 2390,
    
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function SingleLineChart() {
  return (
    <LineChart width={150} height={70} data={data}>
      <Tooltip />
      <Line 
        type="monotone" 
        dataKey="pv" 
        stroke="#624CF5" 
        strokeWidth={1.7}
        dot={false}
        />
    </LineChart>
  );
}