"use client";
import React from "react";
import { Sparklines, SparklinesCurve, SparklinesLine } from "react-sparklines";
import { pickAndroundPrices } from "../lib/utils";

export default function SingleLineChart({coin}) {
  const prices = pickAndroundPrices(coin.sparkline_in_7d.price, 24);

  return (
    <Sparklines data={prices} height={120} limit={20}>
      <SparklinesCurve
        style={{
          strokeWidth: 9, 
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