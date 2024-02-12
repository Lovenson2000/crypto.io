"use client";

import { average, roundToDecimals } from '@/lib/utils';
import React from 'react'
import { Bar, BarChart, Tooltip } from 'recharts';

export default function MobileBarChart({coin}) {

    const allPrices = coin.sparkline_in_7d.price;
    const data = average(allPrices);
    const formattedData = data.map((price) => ({ "price": roundToDecimals(price, 2) }));

    return (
        <BarChart
            width={330}
            height={170}
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