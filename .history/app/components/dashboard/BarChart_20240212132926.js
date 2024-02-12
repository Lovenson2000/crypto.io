"use client";

import { BarChart } from 'lucide-react';
import React from 'react'
import { Bar, ResponsiveContainer } from 'recharts';

function BarChartBox() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
                <Bar dataKey="uv" fill="#8834f8" />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default BarChart