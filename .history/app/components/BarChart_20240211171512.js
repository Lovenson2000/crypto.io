"use client";
import React from 'react'
import { BarChart, Tooltip, XAxis, YAxis } from 'recharts';

export default function BarChartBox() {

    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300
        }
    ];

    return (
        <BarChart width={730} height={250} data={rangeData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }} >
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="temperature" fill="#8884d8" />
        </BarChart>
    )
}
