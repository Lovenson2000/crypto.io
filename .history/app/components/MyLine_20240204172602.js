
import React from "react";
import { LineChart, Line, XAxis, YAxis} from "recharts";
import { bitcoinaData } from "../lib/placeholder";
import { pickAndroundPrices } from "../lib/utils";


const prices = pickAndroundPrices(bitcoinaData.sparkline_in_7d.price, 12);

export default function SingleLineChart() {
  const data = prices.map((pv, index) => ({ pv }));

  return (
    <LineChart width={150} height={70} data={data}>
      <YAxis />
      <Line 
        type="monotone" 
        dataKey= {prices}
        stroke="#624CF5" 
        fill="#ee1fd2" 
        strokeWidth={1.7}
        dot={false}
        />
    </LineChart>
  );
}