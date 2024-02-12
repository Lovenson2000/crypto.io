"use client";

import { pickAndroundPrices } from '@/lib/utils';
import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function AreaChartBox({ coin }) {

    const prices = pickAndroundPrices(coin.sparkline_in_7d.price, 84);


    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        }
    ]

    return (

        <AreaChart width={360} height={230} data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#924CF5" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#924CF5" stopOpacity={0} />
                </linearGradient>
                {/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#124CF5" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#124CF5" stopOpacity={0} />
                </linearGradient> */}
            </defs>
            <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                
            />
            <Area type="monotone" dataKey="uv" stroke="#924CF5" fillOpacity={1} fill="url(#colorUv)" />
            {/* <Area type="monotone" dataKey="pv" stroke="#124CF5" fillOpacity={1} fill="url(#colorPv)" /> */}
        </AreaChart>


    );
}


{/* <Sparklines
    data={prices}
    margin={8}
    height={100}
>

    <SparklinesLine
        style={{ strokeWidth: 1, stroke: "#336aff", fill: "" }}
    />
</Sparklines> */}
