"use client";
import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { LineChart, Line, XAxis, YAxis} from "recharts";
import { bitcoinaData } from "../lib/placeholder";
import { pickAndroundPrices } from "../lib/utils";


const prices = pickAndroundPrices(bitcoinaData.sparkline_in_7d.price, 12);

export default function SingleLineChart() {

  console.log(prices);
  return (
    <Sparklines data={prices}>
      <SparklinesLine color="#fe3d3a"/>
    </Sparklines> 
  );
}



// <LineChart width={150} height={70} data={data}>
    //   <YAxis />
    //   <Line 
    //     type="monotone" 
    //     dataKey= {prices}
    //     stroke="#624CF5" 
    //     fill="#ee1fd2" 
    //     strokeWidth={1.7}
    //     dot={false}
    //     />
    // </LineChart>