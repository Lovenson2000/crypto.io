"use client";

import { average, roundToDecimals } from '@/lib/utils';
import React from 'react'
import { Bar, BarChart, Tooltip } from 'recharts';

export default function DesktopBarChart({coin}) {

    const allPrices = coin.sparkline_in_7d.price;
    const data = average(allPrices);
    const formattedData = data.map((price) => ({ "price": roundToDecimals(price, 2) }));

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