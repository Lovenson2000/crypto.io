"use client";

import { roundToDecimals } from '@/lib/utils';
import { Area, AreaChart, Tooltip } from 'recharts';

export default function DesktopAreaChart({ coin }) {
    const length = coin.sparkline_in_7d.price.length;
    const allPrices = coin.sparkline_in_7d.price;
    const lastTwentyFourPrices = allPrices.slice(length - 24, length);
    const formattedData = lastTwentyFourPrices.map((price) => ({ "price": roundToDecimals(price, 2) }));

    return (

        <AreaChart width={500} height={380} data={formattedData}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <defs>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#624CF5" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#624CF5" stopOpacity={0} />
                </linearGradient>
            </defs>
            <Tooltip
                contentStyle={{ background: "white", border: "none" }}
                labelStyle={{ display: "none" }}
            />
            <Area type="monotone" dataKey="price" stroke="#624CF5" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>


    );
}
