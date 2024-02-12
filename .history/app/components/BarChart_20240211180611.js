"use client";

import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

export default function AreaChartBox({coin}) {

    return (
        <Sparklines >
            <SparklinesLine />
        </Sparklines>
    );
}
