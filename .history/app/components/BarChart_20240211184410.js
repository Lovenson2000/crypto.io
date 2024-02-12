"use client";

import { pickAndroundPrices } from '@/lib/utils';
import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

export default function AreaChartBox({coin}) {

    const prices = pickAndroundPrices(coin.sparkline_in_7d.price, 84);

    return (
        <Sparklines 
            data={prices} 
            margin={8} 
            height={100}
        >
            
            <SparklinesLine
                style={{ strokeWidth: 1, stroke: "#336aff", fill: "" }}
            />
        </Sparklines>
    );
}
