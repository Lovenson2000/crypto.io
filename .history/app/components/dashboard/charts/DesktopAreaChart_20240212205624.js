"use client";

import { pickAndroundPrices, roundToDecimals } from '@/lib/utils';
import React from 'react'
import { Area, AreaChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function DesktopAreaChart({ coin }) {

    const length = coin.sparkline_in_7d.price.length;
    const allPrices = coin.sparkline_in_7d.price;
    const lastTwentyFourPrices = allPrices.slice(length - 24, length);

    const formattedData = lastTwentyFourPrices.map((price) => ({ "price": roundToDecimals(price, 2) }));
    console.log(formattedData);

    return (

        <LineChart width={730} height={250} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <Tooltip />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>



    );
}
