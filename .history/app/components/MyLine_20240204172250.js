
import React from "react";
import { LineChart, Line} from "recharts";
import { bitcoinaData } from "../lib/placeholder";
import { pickAndroundPrices } from "../lib/utils";


const prices = pickAndroundPrices(bitcoinaData.sparkline_in_7d.price, 12);

export default function SingleLineChart() {
  const data = prices.map((pv, index) => ({ name: `Point ${index + 1}`, pv }));

  return (
    <LineChart width={150} height={70} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line 
        type="monotone" 
        dataKey= {prices}
        stroke="#624CF5" 
        strokeWidth={1.7}
        dot={false}
        />
    </LineChart>
  );
}