"use client";

import { pickAndroundPrices } from '@/lib/utils';
import React from 'react'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function DesktopAreaChart({ coin }) {

    const prices = pickAndroundPrices(coin.sparkline_in_7d.price, 24);
    const data = prices.map((price) => ({ "price": price}));
    console.log(data);

    // const data = [
    //     { "price": 3400 },
    //     { "price": 2100 },
    //     { "price": 2800 },
    //     { "price": 4300 },
    //     { "price": 4300 },
    //     { "price": 1300 },
    //     { "price": 6300 },
    //     { "price": 2300 },
    //     { "price": 5400 },
    //     { "price": 2300 },
    //     { "price": 1300 },
    //     { "price": 4300 },
    //     { "price": 6300 },
    //     { "price": 5100 },
    //     { "price": 3200 },
    //     { "price": 1800 },
    //     { "price": 4100 },
    //     { "price": 2900 },
    //     { "price": 3600 },
    //     { "price": 4700 },
    //     { "price": 1600 },
    //     { "price": 5900 },
    //     { "price": 3900 },
    //     { "price": 4800 }
    // ];


    return (

        <AreaChart width={500} height={380} data={data}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#924CF5" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#924CF5" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#124CF5" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#124CF5" stopOpacity={0} />
                </linearGradient>
            </defs>
            <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
            />
            <Area type="monotone" dataKey="" stroke="#924CF5" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="price" stroke="#124CF5" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>


    );
}

