"use client";

import React from 'react'
import { Bar, BarChart, Tooltip } from 'recharts';

export default function MobileBarChart() {

    return (
        <BarChart
            width={330}
            height={170}
            data={data}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
        >
            <Bar
                dataKey="uv"
                fill="#624CF5"
            />
        </BarChart>
    )
}