
import React from "react";
import { LineChart, Line} from "recharts";

const data = [
  {
    uv: 700, 
    
  },
  {
  
    uv: 3000,

  },
  {
   
    uv: 2000,
  },
  {
  
    uv: 3780,
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
      <Line 
        type="monotone" 
        dataKey="uv" 
        stroke="#624CF5" 
        strokeWidth={1.7}
        dot={false}
        />
    </LineChart>
  );
}