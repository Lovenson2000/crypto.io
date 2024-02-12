"use client";

import { pickAndroundPrices } from '@/lib/utils';
import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

export default function AreaChartBox({coin}) {

    const prices = pickAndroundPrices(coin.sparkline_in_7d.price, 158);

    return (
        <Sparklines data={prices} margin={10} height={80}>
            <SparklinesLine color="#5928ff" />
        </Sparklines>
    );
}
