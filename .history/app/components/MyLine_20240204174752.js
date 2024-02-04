"use client";
import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { LineChart, Line, XAxis, YAxis } from "recharts";
import { bitcoinaData } from "../lib/placeholder";
import { pickAndroundPrices } from "../lib/utils";


const prices = pickAndroundPrices(bitcoinaData.sparkline_in_7d.price, 20);

export default function SingleLineChart() {

  return (
    <Sparklines data={prices} height={40}>
      <SparklinesLine
        style={{
          strokeWidth: 3.5, 
          stroke: "#336aff", 
          fill: "none",
        }}
      />
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