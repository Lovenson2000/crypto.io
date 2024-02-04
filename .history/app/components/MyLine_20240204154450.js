
import React from "react";
import { LineChart, Line } from "recharts";

export default function MyLine({bitcoinData}) {
  return (
    <LineChart width={150} height={80} data={bitcoinaData.sparkline_in_7d.price}>
      <Line 
        type="monotone" 
        dataKey={bitcoinData.sparkline_in_7d.price}
        stroke="#8884d8"
        dot={false}
        strokeWidth={1.5} />
    </LineChart>
  );
}