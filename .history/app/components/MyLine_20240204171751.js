
import React from "react";
import { LineChart, Line} from "recharts";
import { bitcoinaData } from "../lib/placeholder";
import { pickAndroundPrices } from "../lib/utils";


const prices = pickAndroundPrices(bitcoinaData.sparkline_in_7d.price, 12);

export default function SingleLineChart() {
  return (
    <LineChart width={150} height={70} data={prices}>
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