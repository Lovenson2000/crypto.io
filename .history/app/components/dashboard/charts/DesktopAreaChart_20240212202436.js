"use client";

import { pickAndroundPrices } from '@/lib/utils';
import React from 'react'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function DesktopAreaChart({ coin }) {

    const prices = pickAndroundPrices(coin.sparkline_in_7d.price, 24);


    return (

        <AreaChart width={500} height={380} data={prices}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <defs>
                {/* <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#924CF5" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#924CF5" stopOpacity={0} />
                </linearGradient> */}
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#124CF5" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#124CF5" stopOpacity={0} />
                </linearGradient>
            </defs>
            <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}   
            />
            {/* <Area type="monotone" dataKey="" stroke="#924CF5" fillOpacity={1} fill="url(#colorUv)" /> */}
            <Area type="monotone" dataKey="prices" stroke="#124CF5" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>


    );
}
