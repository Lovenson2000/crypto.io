"use client";

import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

export default function AreaChartBox({coin}) {


    const prices = pickAndroundPrices(coin.sparkline_in_7d.price, 24);


    return (
        <Sparklines data={prices}>
            <SparklinesLine color="#5928ff" />
        </Sparklines>
    );
}