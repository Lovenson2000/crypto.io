"use client";
import { pickAndroundPrices } from "@/lib/utils";
import React from "react";
import { Sparklines, SparklinesCurve } from "react-sparklines";

export default function SingleLineChart({coin}) {
  const prices = pickAndroundPrices(coin.sparkline_in_7d.price, 24);

  return (
    <Sparklines data={prices} height={120} limit={20}>
      <SparklinesCurve
        style={{
          strokeWidth: 4, 
          stroke: "#336aff", 
          fill: "none",
        }}
      />
    </Sparklines>
  );
}