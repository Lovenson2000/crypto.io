"use client";

import { average, roundToDecimals } from '@/lib/utils';
import React from 'react'
import { Bar, BarChart, Tooltip } from 'recharts';

export default function DesktopBarChart({coin}) {

    const allPrices = coin.sparkline_in_7d.price;
    const data = average(allPrices);
    const formattedData = data.map((price) => ({ "price": roundToDecimals(price, 2) }));

    // const data = [
    //     {
    //         name: 'Page A',
    //         uv: 1000,
    //         pv: 2400,
    //         amt: 2400,
    //     },
    //     {
    //         name: 'Page B',
    //         uv: 3000,
    //         pv: 1398,
    //         amt: 2210,
    //     },
    //     {
    //         name: 'Page C',
    //         uv: 2000,
    //         pv: 9800,
    //         amt: 2290,
    //     },
    //     {
    //         name: 'Page D',
    //         uv: 2780,
    //         pv: 3908,
    //         amt: 2000,
    //     },
    //     {
    //         name: 'Page E',
    //         uv: 1890,
    //         pv: 4800,
    //         amt: 2181,
    //     },
    //     {
    //         name: 'Page F',
    //         uv: 2390,
    //         pv: 3800,
    //         amt: 2500,
    //     },
    //     {
    //         name: 'Page G',
    //         uv: 3490,
    //         pv: 4300,
    //         amt: 2100,
    //     },
        
    // ]
    return (
        <BarChart
            width={400}
            height={350}
            data={formattedData}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
        >
            <Bar
                dataKey="price"
                fill="#624CF5"
            />
        </BarChart>
    )
}